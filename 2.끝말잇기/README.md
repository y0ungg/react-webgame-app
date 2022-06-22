# 2. 끝말잇기  



### day 2 (6/22)
여기 아래까지 하다가 터미널에서 웹팩 Failed to load 에러, 브라우저에서는 no longer supported 에러가 많이 나와서 결국 create-react-app으로 구현해보려 한다...


### webpack.config.js
module.exports 객체의 module.options.presets 배열의 요소에도 원하는 값을 설정해줄 수 있다.      

@babel/presets-env : ECMAScript2015+를 브라우저에 맞게 변환할 때 사용한다. 안에 많은 프리셋이 합쳐져 있다.

```jsx
presets: [
    ['@babel/presets-env', {
        targets: {
            browsers: ['last 2 chrome versions'],
        },
    }],
    '@babel/preset-react',
],
```
  
Webpack 핵심: `entry`, `mode`, `module`, `plugins`, `output`  
실무에서 플러그인 등 뭔지 빠르게 알려면 하나씩 없애서 실행해보고 에러 메시지를 통해 배울 것  
  
`npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D`

`npm i -D webpack-dev-server`  : 결과를 서버에 저장하기 위해 사용 (핫 리로딩, 기존 데이터를 기억한다.)    

강의에서 사용한 버전과 달라서 공식문서를 보고 최신 문법으로 코드를 수정했다.  https://webpack.kr/configuration/dev-server 

---

### day 1 (6/20)

웹팩: 다수의 자바스크립트 파일을 하나로 합쳐주는 것  
babel 적용, console.log 일괄 삭제 등  

`npm init` package.json 파일 생성

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
`npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader`  
  
    
webpack.config.js 파일 생성   
```jsx
const path = require('path');
const webpack =  require('webpack');
module.exports = {
    mode: 'development', // 또는 production
    devtool: 'eval', //hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js'] // a Webpack library that helps locate imported modules. 
    } ,
    entry: { //시작하는 파일 넣을 것
        app: './client',
    },
    module: { //loaders
        rules: [{

        }],
        test: ,
        loader: 'babel-loader',
        options: {
            presets: [],
            plugins: [],
        }
    },
    plugins: [ //추가적으로 하고 싶은 작업
        new webpack.LoaderOptionsPlugin({ debug: true }), //module.loader과 .module.options에 해당 객체를 넣어주는 것
    ]
    output: { //결과가 어떻게 될 지
        filename: '',
        path: path.join(__dirname, ''),
    },
};
```