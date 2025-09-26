import React, { useEffect } from 'react';
import ChatbotDemo from './components/ChatbotDemo';
import './App.css';

function App() {
  useEffect(() => {
    document.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <ChatbotDemo />
    </div>
  );
}

export default App;