'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
var devPort = 3001;

if (process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    var config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

// 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
app.use('/', _express2.default.static(_path2.default.join(__dirname + './../public')));

//express 서버에서 클라이언트사이드 라우팅을 호환
app.get('*', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, './../public/index.html'));
});

//
// app.get('/hello', (req, res) => {
//     return res.send('Can you hear me?');
// });
//
// // 라우트 예제입니다.
// import posts from './routes/posts';
// app.use('/posts', posts);


var server = app.listen(port, function () {
    console.log('Express listening on port', port);
});