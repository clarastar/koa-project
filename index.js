var koa = require('koa');
var app = new koa();

const Router=require('koa-router');
var router = new Router;

app.use(function *(){
	this.body = 'hello world'



})

app .use(router.allowedMethods())
	.use(router.routes())
	.use(require('koa-body'))

var users=[
	{'user':"clara","password":"123456"},
	{'user':"tony","password":"1234"}
];

router.get('/user/:id',ctx=>{
	ctx.body=users[ctx.params.id]
})



app.listen(1222);

