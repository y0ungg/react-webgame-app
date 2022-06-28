# 5. 가위바위보

useEffect, useState, useRef  
setInterval 사용  

가위바위보 사진에서 보여줄 부분을 정해서 각각의 부분을 가위, 바위, 보로 나누고  
사진이 변하면서 컴퓨터와 가위바위보를 한다.

```jsx  
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
```  
useEffect에 setInterval(사진이 변하는 함수, 200ms)를 담아주고  최초 마운트시에만 실행하도록 했다.  
return으로 함수를 넣어줘서 컴포넌트 unmount시에 clearInterval(interval.current) 실행하도록 했다.