const express = require('express');

const router = new express.Router();

// router.get('/newmember', (req, res) => {
//     res.render('newmember', {
//         layout: 'index'
//     });
// });

router.get('/register', (req, res) => {
    res.render('register', {
        layout: 'index'
    });
});

module.exports = router;