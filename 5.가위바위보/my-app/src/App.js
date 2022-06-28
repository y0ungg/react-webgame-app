import React, { useState, useRef, useEffect } from 'react';

const rspCoords = {
  바위: 0,
  가위: -142,
  보: -284,
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find((v) => {
    return v[1] === imgCoord;
  })[0];
};

const App = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(changeHand, 200)
    return () => {
      clearInterval(interval.current);
    } //컴포넌트 unmount시 실행
  }, [imgCoord]) //컴포넌트 최초 마운트 될 때 실행
  
  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  const onClickBtn = (choice) => (e) => {
    console.log(e) // button 태그에 대한 정보 e
    clearInterval(interval.current);
    const myScore = scores[choice];
    const computerScore = scores[computerChoice(imgCoord)];
    const diff = myScore - computerScore;

    if(diff === 0) {
      setResult('비겼습니다');
    }
    else if([-1, 2].includes(diff)) {
      setResult('이겼습니다');
      setScore((prevScore) => prevScore + 1);
    }
    else {
      setResult('졌습니다');
      setScore((prevScore) => prevScore - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 200);
    }, 2000);      
  };

  return (
    <>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord}px 0` }} />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
}

export default App;