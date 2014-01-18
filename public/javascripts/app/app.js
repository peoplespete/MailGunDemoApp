/* global document, window, io */

$(document).ready(initialize);


function initialize(){
  $(document).foundation();

  $('#sendEmail').on('click', clickEmail);
  $('#resetEmail').on('click', clickReset);
}

function clickEmail(){
  console.log($(this).attr('id'));
  var email = {};
  email.to = $('#to').val();
  email.subject = $('#subject').val();
  email.message = $('#message').val();
  sendAjaxRequest('/', email, 'post', null, null, function(data){
    // console.log('success');
    console.log(data);
    $('#to').focus().val('');
    if(data.status == 'Success'){
      $('#subject').val('');
      $('#message').val('');
      alert('Message sent successfully!');
    }else{
      alert('There was a problem with your email, please try sending again.')
    }
  });
}

function clickReset(){
  $('#to').focus().val('');
  $('#subject').val('');
  $('#message').val('');
}

