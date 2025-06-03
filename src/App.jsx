import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }
  , []);

  const formatTime = (time) => {
    return time.toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  const formatDate = (time) => {
    return time.toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center pb-80"
      style={{
        backgroundImage: "url('/wall1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#cbd5e1",
      }}
    >
      <h1 className="text-xl mb-4">{formatDate(time)}</h1>
      <h2 className="text-[120px] font-light">{formatTime(time)}</h2>
    </div>
  )
}

export default App
