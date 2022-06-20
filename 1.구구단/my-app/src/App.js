import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult('정답');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputEl.current.focus();
    } else {
      setResult('다시 도전하세요');
      setValue('');
      inputEl.current.focus();
    }
  };
  return (
    <div className='qnaform'>
      <div className='question'>{first} x {second}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>입력</button>
      </form>
      <div id="result" className={result === '정답' ? "result" : "bounce"}>{result}</div>
    </div>
  );
}

export default App;