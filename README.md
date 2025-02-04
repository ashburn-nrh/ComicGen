# ComicGen - AI-Powered Comic Dialogue Generator

## Overview

ComicGen is a web application that generates comic dialogues based on a user-provided story prompt. The AI model generates three different sets of dialogues, each containing 5-6 lines. The generated dialogues can be downloaded as PDFs for easy use in comic creation.

## Features

- Input a story prompt to generate comic dialogues.
- AI generates three distinct dialogue sets with concise conversations.
- Scrollable UI to view all generated dialogues.
- Each dialogue set has a dedicated button to download as a PDF.

## Technologies Used

### Frontend:

- React.js
- Axios (for API requests)
- Tailwind CSS (for styling)
- jsPDF (for PDF downloads)

### Backend:

- FastAPI (Python framework)
- Google Generative AI API (Gemini-1.5 model)
- CORS Middleware (for frontend-backend communication)

## Installation & Setup

### Backend Setup (FastAPI)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/comicgen.git
   cd comicgen/backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```bash
   pip install fastapi uvicorn google-generativeai pydantic
   ```
4. Set up the API key in `main.py`:
   ```python
   genai.configure(api_key="YOUR_GOOGLE_GENAI_API_KEY")
   ```
5. Run the FastAPI server:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

### Frontend Setup (React.js)

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```



