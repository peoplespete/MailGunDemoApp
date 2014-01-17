/* global document, window, io */

$(document).ready(initialize);


function initialize(){
  $(document).foundation();

  $('#sendEmail').on('click', clickEmail);


}

function clickEmail(){
  console.log($(this).attr('id'));
  var to = getValue('#to');
  var subject = getValue('#subject');
  var message = getValue('#message');
  // console.log(to);
  var email = {};
  email.to = to;
  email.subject = subject;
  email.message = message;
  sendAjaxRequest('/', email, 'post', null, null, function(data){
    // console.log('success');
    console.log(data);
  });
}

