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
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    let greeting;
    if (hours >= 6 && hours < 12) {
      greeting = 'Bom dia⠀';
    } else if (hours >= 12 && hours < 18) {
      greeting = 'Boa tarde⠀';
    } else {
      greeting = 'Boa noite⠀';
    }

    return `${greeting}, são ${timeString}`;
  };

  // Estilo para a hora do relógio (vermelho)
  const clockStyle = {
    color: 'red',
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  // Estilo para o container que contém os elementos h1 e p
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: 'black' }}>{formatTime(time).split(',')[0]}</h1>
      <span style={clockStyle}>{formatTime(time).split(',')[1]}</span>
    </div>
  );
};

export default Clock;
