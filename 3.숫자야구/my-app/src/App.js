import React from 'react';
import { useState } from 'react';
import Try from './Try';

const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array.join('');
};

function App() {
    const [result, setResult] = useState('네자리 숫자를 맞춰주세요'); //h1에 나올 값
    const [value, setValue] = useState(''); //입력값
    const [answer, setAnswer] = useState(getNumbers()); //문제의 답
    const [tries, setTries] = useState([]) //시도흔적
    const [count, setCount] = useState(0) //시도횟수

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer) {
            setResult('홈런!');
            setTries([]);
            setCount(0)
            setValue('')
            setAnswer(getNumbers())
        } else {
            setResult(() => {
              let strike = 0;
              let ball = 0;          
              for(let i=0; i<value.length; i++) {
                if(value[i] === answer[i]) {strike++; continue;}
                else if(answer.includes(value[i])) ball++
              }
              return `${strike}스트라이크 ${ball}볼`
            })
            setCount(count + 1)
            setTries((prevTries) => {
                return [
                    ...prevTries,
                    value
                ]
            })
            if (count === 9) {
              setResult(`정답은 ${answer} 였습니다. 다시 시작해주세요.`)
              setTries([]);
              setCount(0)
              setValue('')
              setAnswer(getNumbers())
        }
      }
    }

    return (
      <div className="App">
        <h1>{result}</h1>
        <form onSubmit={onSubmitForm}>
          <input
              type="text"
              maxLength={4}
              value={value}
              onChange={(e) => setValue(e.target.value)}></input>
          <input type="submit" value='클릭'></input>
        </form>
        {/* <div></div> */}
        <ul>
          {[...tries].map((ele, idx) => {
            return (<Try key={idx} ele={ele} idx={idx}/>)
          })}
        </ul>
      </div>
    );
}

export default App;
