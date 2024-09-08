const Koa = require("koa");
const cors = require("koa2-cors");
const Router = require("koa-router");
const { proxy } = require("./proxy");
const { koaBody } = require("koa-body");

const app = new Koa();
const router = new Router();

router.get(/proxy\/*/, async (ctx) => {
  const res = await proxy(ctx);
  ctx.body = res;
});

router.post(/proxy\/*/, koaBody(), async (ctx) => {
  const res = await proxy(ctx);
  ctx.body = res;
});

router.get("authInvite", async (ctx) => {
  const { code } = ctx.query;
  if (code === "A37b5H") ctx.body = { result: true };
  else ctx.body = { result: false };
});

app.use(
  cors({
    origin: "*",
    allowMethods: ["GET", "POST"],
  })
);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000);
