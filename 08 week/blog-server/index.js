const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

app.use(cors());
app.use(bodyParser());

router.get('/posts', async ctx => {
  ctx.body = db.get('posts')
});

router.get('/posts/:id', async ctx => {
  ctx.body = db.get('posts').find({ id: ctx.params.id });
});


router.post('/posts', async ctx => {
  const post = await db.get('posts')
    .push(ctx.request.body)
    .last()
    .assign({ id: Date.now().toString() })
    .write()

  ctx.body = post;
});



router.delete('/posts/:id', async ctx => {
  const posts = await db.get('posts')
    .remove({ id: ctx.params.id })
    .write()
  ctx.body = posts[0];
})

router.put('/posts/:id', async ctx => {
  const post = await db.get('posts')
    .find({ id: ctx.params.id })
    .assign({ ...ctx.request.body })
    .write()
  ctx.body = post;
})

router.post('/posts/:id/comments', async ctx => {
  const comment = await db.get('comments')
    .push(ctx.request.body)
    .last()
    .assign({ id: Date.now().toString(), postId: ctx.params.id, date: new Date().toLocaleDateString() })
    .write()

  ctx.body = comment;
});


router.get('/posts/:id/comments', async ctx => {
  const comments = db.getState()['comments'].filter(com => com.postId === ctx.params.id);
  ctx.body = comments;
});


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server start on http://localhost:3000')
});