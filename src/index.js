import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZJgkWAQsuFuztLO-a9LKi5o449MnhLN0",
  authDomain: "personal-portfolio-5aefa.firebaseapp.com",
  projectId: "personal-portfolio-5aefa",
  storageBucket: "personal-portfolio-5aefa.appspot.com",
  messagingSenderId: "492282120245",
  appId: "1:492282120245:web:55e5f692e4126eeb29c97c"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
