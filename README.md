# Today I Learned 🌱

This is a full-stack React application for posting and sharing short learning notes ("Today I Learned").

## 🚀 Features

- View a list of all TIL posts
- Add new facts or notes
- Vote on facts as interesting, mind-blowing, or false
- Categorized tagging and color-coded labels

## 🛠️ Tech Stack

- Frontend: React, CSS
- Backend: Supabase (PostgreSQL + API + Auth)
- Build Tool: Create React App (CRA)

## 📦 Getting Started

1. Clone the repo

   git clone https://github.com/YOUR_USERNAME/today-i-learned.git  
   cd today-i-learned

2. Install dependencies

   npm install

3. Start the app

   npm start

## 🔐 Supabase Setup

1. Create a free account at https://supabase.com/
2. Create a new project and a table for storing facts
3. Configure the Supabase URL and anon key in a `.env` file in your project root:

   REACT_APP_SUPABASE_URL=your-supabase-url  
   REACT_APP_SUPABASE_KEY=your-anon-key

## 🧾 License

This project is open source and available under the MIT License.
