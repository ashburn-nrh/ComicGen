from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from typing import Dict


genai.configure(api_key="AIzaSyC5tFI_TwCtBQqRZykbWlbE6JZfsq_1-GM")
model = genai.GenerativeModel("gemini-1.5-flash")

app = FastAPI()

# Allow CORS for the frontend (React app)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Allow React frontend
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)


class StoryPrompt(BaseModel):
    story_prompt: str

# 
@app.post("/generate-comic-dialogue")
async def generate_comic_dialogue(prompt: StoryPrompt) -> Dict[str, str]:
    try:
        
        response = model.generate_content(prompt.story_prompt)
        # Return the generated comic dialogue in JSON format
        return {"dialogue": response.text}
    except Exception as e:
    
        return {"error": str(e)}

# Run the FastAPI app with Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
