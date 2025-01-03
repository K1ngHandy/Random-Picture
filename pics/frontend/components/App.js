import React, { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [pic, setPic] = useState('');
  const [info, setInfo] = useState('')
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
    </div>
  )
}

export default App
