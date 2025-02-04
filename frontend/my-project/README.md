# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

ComicGen - AI-Powered Comic Dialogue Generator

Overview

ComicGen is a web application that generates comic dialogues based on a user-provided story prompt. The AI model generates three different sets of dialogues, each containing 5-6 lines. The generated dialogues can be downloaded as PDFs for easy use in comic creation.

Features

Input a story prompt to generate comic dialogues.

AI generates three distinct dialogue sets with concise conversations.

Scrollable UI to view all generated dialogues.

Each dialogue set has a dedicated button to download as a PDF.

Technologies Used

Frontend:

React.js

Axios (for API requests)

Tailwind CSS (for styling)

jsPDF (for PDF downloads)

Backend:

FastAPI (Python framework)

Google Generative AI API (Gemini-1.5 model)

CORS Middleware (for frontend-backend communication)
