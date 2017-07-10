/**
 * Created at 17/6/22.
 * @Author Thunder King Star.
 * @Email 332793511@qq.com
 */
export default async (ctx, next) => {
  // api server through koa-router
  if (ctx.path.match(/^\/api/)) {
    return await require('./api').routes()(ctx, next)
  }
  // others react-router to render
  await require('./render')(ctx, next)
}
