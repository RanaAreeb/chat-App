import React from 'react';
import { createRoot } from 'react-dom/client'; // This is the correct import for React 18
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root.

root.render(
    <App />

);
