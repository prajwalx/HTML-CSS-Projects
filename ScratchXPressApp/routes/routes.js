var express = require('express');
var router= express.Router();

router.get('/',function(req, res){
  res.render('index');
});

router.get('/GetValue/:FName',function(req, res){
  console.log(req.params.FName);
  //res.send('Welcome '+req.params.FName);
  var x='',y='';
  var z=req.params.FName;

  var i=0;
  while(z.charAt(i)!=='+'&&z.charAt(i)!=='-'&&z.charAt(i)!=='*'&&z.charAt(i)!=='d')
  {
    x=x+z.charAt(i);
    i++;
  }
  console.log(x);
  var op=z.charAt(i);
  i++;

  while(i<z.length)
  {
  y=y+z.charAt(i);
  i++;
  }
  var sum=0;
  switch (op) {
    case '+':
    sum=parseInt(x)+parseInt(y);
      break;

      case '-':
        sum=parseInt(x)-parseInt(y);
        break;
        case '*':
          sum=parseInt(x)*parseInt(y);
          break;
          case 'd':
            sum=parseInt(x)/parseInt(y);
            break;
    default:
      sum=parseInt(x)+parseInt(y);
  }
  //sum=parseInt(x)+parseInt(y);
  console.log(op);
  console.log(sum);
  res.send(sum.toString());

});

module.exports = router;
