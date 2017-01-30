import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import path from 'path';

const app = express();
const port = 3000;
const devPort = 3001;

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

// 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
app.use('/', express.static(path.join(__dirname + './../public')));

//express 서버에서 클라이언트사이드 라우팅을 호환
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

//
// app.get('/hello', (req, res) => {
//     return res.send('Can you hear me?');
// });
//
// // 라우트 예제입니다.
// import posts from './routes/posts';
// app.use('/posts', posts);


const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
