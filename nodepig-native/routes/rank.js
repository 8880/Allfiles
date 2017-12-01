const router = require('koa-router')();

router.get('/rank', async function(ctx, next){
  await ctx.render('rank',
  {});
});

module.exports = router;
