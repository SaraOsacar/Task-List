import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="pageContainer">
      <App />
    </div>
  </React.StrictMode>
);
