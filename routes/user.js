// 라우터 모듈화
var express = require('express');
var router = express.Router();


router.get('/:id', function(req, res) {
    res.send('Received a GET request, param: ' + req.params.id);
});

router.post('/', function(req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({
        success: true,
        user: req.body.username
    })
});

router.put('/', function(req, res) {
    res.status(400).json({message: "hey you. bad request"})
});

router.delete('/', function(req, res) {
    res.send('Received a Delete request');
});

module.exports = router;