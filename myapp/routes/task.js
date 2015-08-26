var express = require('express');
var router = express.Router();

/*GET task LISTING*/
router.get('/ts', function xxx(req,res){
  var pj = {
    success: true,
    session:'c3749879cdbcb79e7a6b95f3d241a784',
    sessionTimeout:3600,
    projects:[{
      title:'planning'
    },{
      title:'prototyping'
    }],
  };
  res.send(pj);
});

module.exports = router;
