import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Ball } from './Ball';

const getWinNumbers = () => {
  const oneToFourtyFive = Array(45).fill().map((e, i) => i + 1); //1부터 45까지 들어있는 배열

  //피셔-예이츠 셔플(Fisher-Yates shuffle) 알고리즘
  for(let i = oneToFourtyFive.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 무작위 인덱스(0 이상 i 미만)
    [oneToFourtyFive[i], oneToFourtyFive[j]] = [oneToFourtyFive[j], oneToFourtyFive[i]];
  };
  
  //oneToFourtyFive 배열을 무작위로 섞은 뒤 필요한 갯수만큼 slice해서 쓴다.
  const bonusNumber = oneToFourtyFive[6]; //보너스 번호 = 6번째 인덱스
  const winNumbers = oneToFourtyFive.slice(0, 6).sort((p, c) => p-c); //당첨 번호 = 0번째 인덱스부터 5번째 인덱스까지, 순서대로 정렬

  return [...winNumbers, bonusNumber]; //당첨 번호 배열 리턴
}

function App() {
  const lottoNumbers = useMemo(() => getWinNumbers(), []) //두번째 인자가 바뀌기 전까지 memo한다.

  const [winNumbers, setWinNumbers] = useState(getWinNumbers()); //매번 바뀌는 번호 상태
  const [winBalls, setWinBalls] = useState([]); //뽑힌 배열 상태
  const [bonus, setBonus] = useState(null); //뽑힌 보너스 번호 상태
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);

  useEffect(()=> {
    for(let i=0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls(prev => [...prev, winNumbers[i]])
      }, (i+1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000)

    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v)
      })
    } //언마운트시에 실행할 함수

  }, [timeouts.current]); //최초 마운트시에 실행할 함수


  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]) // 두번째 인자가 업데이트되면 함수를 다시 기억한다.
  

  return (
    <div className="App">
      <h2 className='numbers'>당첨 숫자</h2>
      <div id='result'>
        {winBalls.map(v => <Ball key={v} number={v} />)}
      </div>
      <h2 className='numbers'>보너스 번호</h2>
      <div>
        {bonus && <Ball number={bonus} />}
      </div>
      {redo && <button onClick={onClickRedo}>한번더!</button>}
    </div>
  );
}

export default App;
