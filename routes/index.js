// this is the default loading page

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index');
});

module.exports = router;