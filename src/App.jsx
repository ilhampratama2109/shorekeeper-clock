import React, { useState, useEffect, useRef } from 'react';
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());
  const audioRef = useRef(null);

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

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center pb-80"
      style={{
        backgroundImage: "url('wall1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#cbd5e1",
      }}
    >
      <audio ref={audioRef} loop>
        <source src="bgMusic.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <h1 className="text-xl mb-4">{formatDate(time)}</h1>
      <h2 className="text-[120px] font-light">{formatTime(time)}</h2>
      <button
          onClick={handlePlayMusic}
          className="mt-8 px-4 py-2 bg-white text-black rounded-lg shadow"
      ></button>
    </div>
  )
}

export default App
