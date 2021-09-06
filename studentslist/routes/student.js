const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/studentsList', function(req, res, next) {
    const studentNames = {
        "results": [
            "Rajesh",
            "Ramesh",
            "Sayali",
            "Sanjana"
        ]
    };
    res.send(studentNames);
  });

module.exports = router;