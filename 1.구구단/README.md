# 1. 구구단  
React 컴포넌트는 함수형 컴포넌트 X 함수 컴포넌트 O  
state 변경 -> 페이지 업데이트 (렌더링)

```jsx
const [state, setState] = useState() //구조분해  
// const state = useState[0]  
// const setState = useState[1]
```
  
React 감 잡는 훈련하기  
state, props 구분하기  

useRef : DOM에 직접적으로 접근하고 싶을 때 사용한다  

---

제로초 <웹 게임을 만들며 배우는 React> 강의를 보고 구구단 app을 만들었다.
틀린 답을 입력할 경우 animation을 사용하여 '다시 도전하세요'라는 문구가 좌우로 흔들거리게 만들었다.
정답을 입력할 경우 파란색 글자로 '정답'이라는 문구가 출력되고, 다음 문제를 바로 풀 수 있도록 input 칸에 focus를 맞췄다.