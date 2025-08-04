import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import FaqLayout from './components/FAQpage/FaqLayout'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/faq" element={<FaqLayout />} />
    </Routes>
  </BrowserRouter>,
)
