var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/getIndex', function (req, res, next) {
    request(`https://m.weibo.cn/api/container/getIndex?containerid=102803_ctg1_4388_-_ctg1_4388&openApp=0`, (err, reponse, body) => {
        res.send(body);
    })
});

module.exports = router;