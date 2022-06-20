const path = require("path");

module.exports ={
    name: 'wordreplay-setting',
    mode: 'development', //실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'] //확장자 파싱할 수 있게 함
    },

    entry: {
        app: ['./client'] //client.jsx안에서 'WordReplay.jsx'를 불러오고 있기 때문에 작성하지 않아도 된다.
    }, //입력

    module: {
        rules: [{
            test: /\.jsx?/, //정규표현식
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }]
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, //출력
};