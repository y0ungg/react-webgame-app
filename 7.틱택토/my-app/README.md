# 7. 틱택토

### 컴포넌트 구조
지금까지보다 컴포넌트를 더 작게 나누어서 조립하는 식으로 만들었다.   

부모 -> 자식 순  
TicTacToe -> Table -> Tr -> Td  
최상위 컴포넌트인 틱택토에서 상태를 관리한다.

- `useReducer`    
state를 관리하는 함수  
`useState`와 다르게 컴포넌트 외부에 작성할 수도 있고 다른 파일에서 불러올 수도 있다.    

```jsx
const [state, dispatch] = useState(reducer, initialState);  
//dispatch: action을 발생시키는 함수
//reducer: 2개의 매개변수 (state, action)를 갖는 함수
//initialState: {state: 초기값}을 속성값으로 갖는 객체 
```  
  
state를 변경하려면 action을 dispatch(실행)해야 하고, action을 어떻게 구현하는지는 reducer이 관리한다.
  
- styled-components를 적용해봤다.  