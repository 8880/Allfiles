const router = require('koa-router')();

const User = require('../models/user');

let user = new User('user');
router.get('/main', async function (ctx, next) {
  let name = getUserName(ctx);
  await ctx.render('main', {
    name: name
  });
});

router.post('/main', async function (ctx, next) {
  let type = ctx.request.body.type;
  let name;
  if (type == 'login') {
    name = ctx.request.body.user;
    let pwd = ctx.request.body.pwd;
    let res = await user.find(name, pwd);
    isLogOk(res);
  } else if (type == 'register') {
    name = ctx.request.body.user;
    let pwd = ctx.request.body.pwd;
    let email = ctx.request.body.email;
    let phone = ctx.request.body.phone;
    let data = { 'username': name, 'password': pwd, 'email': email, 'phone': phone, 'type': 0, 'personal': '0' };
    try {
      res = await user.add(data);
      isRegOk(res);
    } catch (err) {
      console.log('譔名字已被使用')
    }
  }
  await ctx.render('main', {
    name: name
  });
  if (name) {
    setCookie(name, ctx);
  } else {
    setCookie('0', ctx);
  }
});



function setCookie(name, ctx) {
  ctx.cookies.set('name', name,
    {
      maxAge: 10 * 60 * 1000,
      overwrite: false,
    });
}

function isRegOk(res) {
  console.log('注册成功');
}

function isLogOk(res) {
  if (res.length == 0) {
    console.log('登陆失败');
  } else {
    console.log('登陆成功');
  }
}

function getUserName(ctx) {
  return ctx.cookies.get('name');
}

module.exports = router;
