
# Movie Ticket Booking Application



This is a full-stack Movie Ticket Booking Web Application, inspired by platforms like BookMyShow. The application allows users to:

Browse movies

View movie details & showtimes

Select seats in an interactive layout

Book tickets and receive a confirmation

It is divided into two parts:

Frontend built using React.js

# Backend built using Node.js, Express, and  MongoDB

🧰 Project Structure
├── react/          # Frontend React app
├── backend/        # Backend API with Node.js and Express
├── .gitignore
├── README.md
🚀 Features
🎞️ Movie browsing and search

📅 Show timings and date selection

💺 Interactive seat layout

🎟️ Ticket booking with summary

👤 User booking history (if extended with auth)

📱 Fully responsive design

📦 Frontend Setup (React)
# Requirements:



Node.js (v16+)

npm or yarn

# Steps to Run Frontend:

cd react
npm install
npm start
This will start the frontend app on:
📍 http://localhost:3000

# Backend Setup (Node.js + Express)
# Requirements:
Node.js (v16+)
MongoDB
# Steps to Run Backend:

cd backend
npm install
nodemon start  


By default, the server runs at:
📍 http://localhost:5000

# Connecting Frontend and Backend
Make sure your frontend is making API requests to the backend correctly. For local development, you can use:
// Example in frontend API calls
fetch('http://localhost:5000/api/movies')


📁 Environment Variables (Backend)
Create a .env file inside the backend/ folder if you're using environment-specific configs:

ini
Copy
Edit
PORT=5000
MONGO_URI=your-mongodb-uri

# Dependencies Summary
# Frontend:
React

React Router

Bootstrap 

# Backend:
Express.js

Node.js

CORS

Body-parser

MongoDB + Mongoose

dotenv
