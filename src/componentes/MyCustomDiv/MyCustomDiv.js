import React, { useState, useEffect } from 'react';


const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div>
      <h1>Relógio</h1>
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default Clock;
