var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun('key-1o2h3qpg-i1ip1hrk4b-s43t-x67kdc1');

//GET /

exports.index = function(req, res){
      res.render('home/index', {title: 'Express'});
};


//POST /

exports.mail = function(req, res){

  console.log(req.body);
  // mg.sendText('example@example.com', ['Recipient 1 <' + req.body.to + '>', 'petedunlap@gmail'],
  mg.sendText('example@example.com', ['Recipient 1 <' + req.body.to + '>'],
    req.body.subject,
    req.body.message,
    'noreply@example.com', {},
    function(err) {
      if (err) console.log('Oh noes: ' + err);
      else     console.log('Success');
      res.send();
  });

};