
$(function() {
   $( "#loginmodal" ).dialog({
     autoOpen: false,
     buttons: {
       "确定":function(){
          let name = $('#mer_name').val();
          let mer = $('#mer').val();
          let img = $('#mer_img').get(0).files[0];

          // let file = $('#met_file');
          // var data = {mName: name, mMer: mer, mImg: img, mFile: file};
          var data = {mName: name, mMer: mer, mImg: img};
          if (data != null) {
            console.log(typeof name);
            sendData(data);
            $(this).dialog("close");
          }
       },
       "取消":function(){
        $( this ).dialog( "close" );
       }
     }
   });

$( "#add" ).click(function() {
  $( "#loginmodal" ).dialog( "open" );
  });
});

$(function() {
   $( "#changeuserinfo" ).dialog({
     autoOpen: false,
     buttons: {
       "确定":function(){

       },
       "取消":function(){
        $( this ).dialog( "close" );
       }
     }
   });

$( "#change" ).click(function() {
  $( "#changeuserinfo" ).dialog( "open" );
  $('#changeName').val = $('#usename').text();
  });
});

$(function() {
   $( "#openShop" ).dialog({
     autoOpen: false,
     buttons: {
       "确定":function(){

       },
       "取消":function(){
        $( this ).dialog( "close" );
       }
     }
   });

$( "#go" ).click(function() {
  $( "#openShop" ).dialog( "open" );
  });
});


function sendData(mData){
  $.ajax({
    method: 'POST',
    dataType: "json",
    secureuri: false,
    url: 'http://192.168.0.202:3000/usermain',
    data: mData
  }).done(function(msg){
    alert('上传成功');
  });
}

$(document).ready(function(){

});
