var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  var x = {
    sucess: true,
    session:'c3749879cdbcb79e7a6b95f3d241a784',
    sessionTimeout:'3600',
    friends:[
      {
        name:'mike'
      },{
        name:'alice'
      }
    ]

  };
  res.send(x);
});

module.exports = router;
