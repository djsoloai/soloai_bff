const { Axios } = require("axios");
const { getProxyHttpAgent } = require("proxy-http-agent")
const https = require('https')

const axios = new Axios({ baseURL: "https://8.222.211.86/api/v1", headers: { 'Content-Type': 'application/json' }, httpsAgent: new https.Agent({rejectUnauthorized: false}), insecureHTTPParser: true })

const proxy = async (ctx) => {
  let res = null
  try {
    res = await axios.request({ method: ctx.request.method, headers: { 'Authorization': ctx.request.headers.authorization }, url: ctx.request.url.slice(6), data: ctx.request.body ? JSON.stringify(ctx.request.body) : void 0 })
  } catch (err) {
    console.log(err)
    return err
  }
  return res.data
}

module.exports = { proxy }
