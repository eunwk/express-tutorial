var express = require('express');
// const res = require('express/lib/response');
var app = express();
// 라우터 불러와서 사용하기
var user = require('./routes/user');
// myLogger 콜백함수
var myLogger = function(req, res, next) {
    console.log(req.url);
    next();
}
var morgan = require('morgan');
var bodyParser = require('body-parser');

// app.use에 넣어준다.
// app.use(myLogger);
app.use(morgan('dev')); // log를 찍어줌
app.use(bodyParser.json()); // 응답받은 json 형태의 파일을 보기 편하게
app.use('/', express.static('public')); // '/' 경로에 들어왔을때 public 디렉토리의 파일을 쓸수 있도록 처리

// 위의 '/' use 옵션이 있어 아래 명령어는 작동하지 않는다. 같은 경로의 명령어가 있을 경우 위의 명령어가 처리되고, 아래는 무시됨.
// req 요청, res 응답
// app.get('/', function(req, res) {
//     res.send('Hello World22');
// });



// 불려온 라우터
app.use('/user', user);

app.listen(3000, function() {
    console.log('Example App listening on port 3000');
});




  
