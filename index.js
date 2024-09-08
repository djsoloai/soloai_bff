const Koa = require("koa");
const cors = require("koa2-cors");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/receiver", async (ctx) => {
    const res = receiver();
    ctx.body = res;
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