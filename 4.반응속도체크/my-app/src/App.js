import React from 'react';
import { useState, useRef } from 'react';

function App() {
  const [color, setColor] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요")
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);
  
  const onClickScreen = () => {
    if(color === 'waiting') {
      setColor('ready');
      setMessage("초록색이 되면 클릭하세요");
      timeout.current = setTimeout(() => {
      setColor('now');
      setMessage("지금 클릭");
      startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); //2~3초 사이 랜덤
    }

    else if(color === 'ready') {
      clearTimeout(timeout.current);
      setColor("waiting");
      setMessage("실격입니다. 다시 시작하세요.");
    }

    else if(color === 'now') {
      endTime.current = new Date();
      setColor('waiting')
      setMessage('클릭해서 시작하세요')
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current]
      })
    };
  }

  const ave = (arr) => {
    return arr.reduce((p, c) => p + c, 0) / arr.length;
  }

  const onRest = () => {
    setResult([])
  }

  const renderAverage = () => {
    return result.length === 0
    ? null
    : <div>
      <div>평균 시간: {ave(result)}ms</div>
      <button onClick={onRest}>리셋</button>
    </div>
  }

  return (
    <div className="App">
      <div id='screen' className={color} onClick={onClickScreen}>{message}</div>
      {renderAverage()}
    </div>
  );
}

export default App;
