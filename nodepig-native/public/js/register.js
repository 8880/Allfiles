// $(document).ready(function(){
  // $('#ok').click(function(){
  //   let name = $('#username').text();
  //   let pwd = $('#password').text();
  //   let email = $('#email').text();
  //   let phone = $('#phone').text();
  //   let agin = $('#agin').text();
  //   if (pwd ! = pwd) {
  //     alert('再次密码不同');
  //   }
  // });
// $('#login').click(function(){
//   let mName = $('#user').text();
//   let mPwd = $('#pwd').text();
//   let data = {name: mName, pwd: mPwd};
//   login(data);
//   alert('aaa');
// });

function isLogin1(){
  let mName = $('#user').val();
  let mPwd = $('#pwd').val();
  let data = {name: mName, pwd: mPwd};
  login(data);
}
// });

function login(mData){
  $.ajax({
    method: 'POST',
    url: '/login',
    data: mData
  }).done(function (msg){
    console.log(msg);
    if (msg === 'ok') {
      window.location = 'http://192.168.0.202:3000/main';
    }else {
      alert('你想干什么...');
    }
  }).fail(function (msg){
    console.log(msg);
  });
}
