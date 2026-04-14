import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import './scss/style.scss';
import './i18n/config';

// Initialize theme before React renders to prevent flash
if (typeof window !== 'undefined') {
  // Load theme from localStorage or use system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
  
  // Apply theme immediately
  if (isDark) {
    document.documentElement.classList.add('dark-mode');
    document.documentElement.classList.remove('light-mode');
  } else {
    document.documentElement.classList.add('light-mode');
    document.documentElement.classList.remove('dark-mode');
  }
  
  // Ensure smooth scrolling works properly
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Fix for react-scroll smooth scrolling issues
  const handleSmoothScroll = () => {
    // Remove any conflicting scroll behaviors
    const style = document.createElement('style');
    style.textContent = `
      html { scroll-behavior: smooth !important; }
      * { scroll-behavior: inherit; }
    `;
    document.head.appendChild(style);
  };
  
  // Apply on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleSmoothScroll);
  } else {
    handleSmoothScroll();
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
