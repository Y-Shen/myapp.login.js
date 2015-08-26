var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function resdsdsds(req, res) {

  var x1 = {
    success: true,
    session:'c3749879cdbcb79e7a6b95f3d241a784',
    sessionTimeout:3600,
    friends:[{
        name:'mike'
      },{
        name:'alice'
      }
    ],

  };
  var x2 = {
    success:false,
    text:"Log in again"
}

  res.send(x2);

  req.params['miao'];

});




module.exports = router;
