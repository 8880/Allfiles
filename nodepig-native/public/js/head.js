$(document).ready(function(){
  $('#login').click(function(){
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
  });

  $('#employers').click(function(){
    // $('#eml').slideToggle('slow');
  });

  $('#order').click(function(){
    // $('#ord').slideToggle('slow');
  });

  $('#myself').click(function(){
    err();
  })

  function err(){
    alert('技术问题,解决中...');
  }
});
