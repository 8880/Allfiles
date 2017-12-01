const router = require('koa-router')();

const User = require('../models/user');
const Shop = require('../models/shop');
const Trading = require('../models/trading'); //交易
const Tag = require('../models/tag');　//tag
const Merchandise = require('../models/merchandise');//商品表


router.get('/login', async function(ctx, next){
  let type = ctx.request.querystring;
  await ctx.render('register',
  {
    'type': type[5]
  });
});

router.post('/login', async function(ctx, next){
  let name = ctx.request.body.name;
  let pwd = ctx.request.body.pwd;
  let user = new User('user');
  let res = await user.find(name, pwd);
  let result = isLogOk(res);
  console.log(result);
  ctx.body = result;
  if (result === 'ok') {
    setCookie(name, ctx);
  }else {
    //..
  }
});

router.get('/rember', async function(ctx, next){
  await ctx.render('rember',
  {});
});

function isLogOk(res){
  if (res.length == 0) {
    return 'error';
  }else {
    return 'ok';
  }
}

/**
这里才是主界面
**/

router.get('/usermain', async function(ctx, next){
  let tagInfo, shopInfo, userInfo;
  let myName = getUserName(ctx);   //如果把譔界面做为单页面   那个譔name将不一定是 cookie中的name  还可能是shop的主人...
  let mmap = {username: myName};

  user = new User('user');
  shop = new Shop('shop');
  tag = new Tag('tag');

  userInfo = await user.getThis(mmap);

  let tagId = {tag_id: userInfo.user_id};
  tagInfo = await tag.getThis(tagId);

  let shopId = {shop_id: userInfo.user_id};
  shopInfo = await shop.getThis(shopId);

  await ctx.render('usermain',
  {
    name: myName,
    userinfo: userInfo,
    shopinfo: shopInfo,
    taginfo: tagInfo
  });
});


router.post('/usermain', async function(ctx, next){

  await ctx.render('usermain',
  {

  });
  // console.log('ajax');
});


function getUserName(ctx){
  return ctx.cookies.get('name');
}

function setCookie(name, ctx){
  ctx.cookies.set('name', name,
                  {
                    maxAge : 10 * 60 * 1000,
                    overwrite: false,
                  });
}

module.exports = router;
