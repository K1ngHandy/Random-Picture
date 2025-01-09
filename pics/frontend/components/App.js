import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  background: cyan;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const WrapperDiv = styled.div`
  width: 80%;
  height: 80%;
  background-color: gainsboro;
  margin: auto;
`;

function App() {
  const [pic, setPic] = useState('');
  const [info, setInfo] = useState('')
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const refreshPage = () => {
    window.location.reload();
  }

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
    <WrapperDiv className='App'>
      <h1>Great picture!</h1>
      <img src={pic} height='300px' alt='alt text' />
      <h2>{info}</h2>
      <Button onClick={refreshPage}>Random Picture</Button>
      
      <h3>Mouse position:</h3>
      {position.x}:{position.y}
    </WrapperDiv>
  )
}

export default App
