import React, { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [pic, setPic] = useState('');
  const [info, setInfo] = useState('')
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    console.log("Effect has run, event listener added.");
  })

  useEffect(() => {
    axios
      .get('http://localhost:9009/api/pics/random')
      .then(res => {
        setPic(res.data.file);
        setInfo(res.data.detail);
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className='App'>
      <h1>Great picture!</h1>
      <img src={pic} height='300px' alt='alt text' />
      <h2>{info}</h2>
      <h3>Mouse position:</h3>
      {position.x}:{position.y}
    </div>
  )
}

export default App
