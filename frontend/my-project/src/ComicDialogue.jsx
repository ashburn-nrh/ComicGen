import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

const ComicDialogue = () => {
  const [storyPrompt, setStoryPrompt] = useState('');
  const [dialogue, setDialogue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleStoryPromptChange = (e) => {
    setStoryPrompt(e.target.value);
  };

  const fetchComicDialogue = async () => {
    setLoading(true);
    setError('');
    try {
      const prefix = "Create 3 different dialogues, each 5-6 lines long, between the characters in the following scenario:";
      const updatedStoryPrompt = prefix + storyPrompt;
  
      const response = await axios.post('http://127.0.0.1:8000/generate-comic-dialogue', {
        story_prompt: updatedStoryPrompt
      });
      setDialogue(response.data.dialogue.split('\n\n').slice(0, 6)); // Ensure only 3 sets are considered
    } catch (err) {
      setError('Error generating dialogue');
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = (text, index) => {
    const doc = new jsPDF();
    const lines = text.split('\n').slice(0, 6).join('\n'); // Ensure only the dialogue is included
    doc.text(lines, 10, 10);
    doc.save(`Dialogue_Set_${index + 1}.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-200 p-6">
      <h1 className="text-4xl font-bold italic text-gray-800 mb-4">ComicGen</h1>
      <h2 className="text-3xl font-bold text-center mb-6">Generate Comic Dialogue</h2>
  
      <textarea
        className="w-3/4 max-w-lg h-32 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={storyPrompt}
        onChange={handleStoryPromptChange}
        placeholder="Enter your story prompt..."
      />
  
      <button 
        className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 transition duration-300"
        onClick={fetchComicDialogue}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Dialogue'}
      </button>
  
      {error && <p className="text-red-500 mt-3">{error}</p>}
  
      {dialogue.length > 0 && (
        <div className="mt-5 w-3/4 p-4 bg-white border border-gray-200 rounded-lg shadow-md max-h-96 overflow-y-auto">
          <strong>Generated Comic Dialogues:</strong>
          {dialogue.map((set, index) => (
            <div key={index} className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <div className="mt-2 text-gray-700 whitespace-pre-wrap">
                {set.split('\n').slice(0, 6).map((line, idx) => (
                  <p key={idx} className="mb-2">{line}</p>
                ))}
              </div>
              <button 
                className="mt-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                onClick={() => downloadPDF(set.split('\n').slice(0, 6).join('\n'), index)}
              >
                Download as PDF
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComicDialogue;
