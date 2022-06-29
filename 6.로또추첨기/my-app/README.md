# 6. 로또추첨기   
랜덤 번호 6개 + 보너스 번호 1개를 출력한다.

`setTimeout()`: 각각의 숫자를 출력하는 시간을 지연한다.

### Hook
`useMemo`: 로또 추첨 함수를 계속 호출하지 않도록, return값인 로또 숫자를 memo하기 위해 사용함
`useCallback`: 함수 자체를 기억한다.  

자식 컴포넌트에 props로 함수를 넘기면 useCallback을 사용해야 한다.  
그렇지 않으면 매번 새로운 함수가 전달된다. -> 매번 새로운 props가 전달되어서 매번 렌더링됨  

### 배열 생성 & 요소 채우기

```jsx 
const oneToFourtyFive = Array(45).fill().map((e, i) => i + 1);

//new Array(arrayLength): 길이 45인 새로운 Array 객체 생성
//arr.fill(value[,start[,end]]): 채울 값, 시작 인덱스(기본값 0), 끝 인덱스(기본값 this.length)
//arr.map(): (index + 1의 값으로) fill하기 위한 함수 
```   
  
### 피셔-에이츠 셔플 알고리즘  
  
강의에서는 다른 방식으로 로또 번호를 추첨했지만 나는 배열 요소를 셔플 해주는 함수가 있는지 알아봤다.  
검색하다가 모든 순열이 거의 유사한 빈도로 만들어지는 `피셔-에이츠 셔플 알고리즘`을 발견해서 적용해봤다.  
https://ko.javascript.info/task/shuffle  

배열 끝 요소부터 시작해서 앞으로 하나씩 나아가면서 해당 요소 앞에 있는 임의의 요소와 해당 요소를 바꿔치기 한다.  

```jsx
//피셔-예이츠 셔플(Fisher-Yates shuffle) 알고리즘
  for(let i = oneToFourtyFive.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 무작위 인덱스(0 이상 i 미만)
    [oneToFourtyFive[i], oneToFourtyFive[j]] = [oneToFourtyFive[j], oneToFourtyFive[i]]; //구조분해할당
  };
```