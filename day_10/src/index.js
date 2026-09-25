import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ImageSlider from './ImageSlider';
import ImageRotator from './ImageRotator';
import ImageAnimation from './ImageAnimation';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <ImageSlider />
    <ImageRotator />
    <ImageAnimation />
  </React.StrictMode>
);

reportWebVitals();