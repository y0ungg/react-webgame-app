import { useState } from 'react'

function App() {
  const [word, setWord] = useState('토마토');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('입력하세요');

  const handleSubmit = (e) => {
    e.preventDefault();
    //word의 마지막 글자와 value의 첫 글자가 같으면 result = '정답'
    //value = word가 된다.
    if(e.value === word){
      setValue(e.value);
      setResult('통과');
      setWord(value);
    }
    if(e.value !== word){
      setResult('다시 입력하세요');
    }
  }

  return (
    <div className="App">
      <h1>{word}</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' onChange={(e) => { setValue(e.target.value) }} />
        <input type="submit" />
      </form>
      <div>
        {result}
      </div>
    </div>
  );
}

export default App;
