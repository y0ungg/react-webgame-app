# 2. 끝말잇기  


웹팩: 다수의 자바스크립트 파일을 하나로 합쳐주는 것  
babel 적용, console.log 일괄 삭제 등  


`npm i -D webpack webpack-cli`
-D : devDependencies에 install된다.  
  
node의 모듈시스템 `module.exports`으로 외부에서도 해당 컴포넌트를 사용할 수 있게 된다.  
  
jsx 파일이 하나로 합쳐져야 html에서 하나의 script로 불러올 수 있다.  
`path.join(__dirname, 'dist')` 
node의 path.join()으로 경로를 합친다.  
__dirname: 현재 경로명  

`npx webpack`으로 webpack을 설치하면  

>ERROR in ./client.jsx 6:16
Module parse failed: Unexpected token (6:16)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| const WordReplay = require('./WordReplay');
| 
> ReactDom.render(<WordReplay/>, document.querySelector('#root')

이 부분에서 error가 발생한다.  
  
babel 설치로 해결 가능
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader