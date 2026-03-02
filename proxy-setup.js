// proxy-setup.js
const { setGlobalDispatcher, ProxyAgent } = require("undici");

setGlobalDispatcher(new ProxyAgent("http://127.0.0.1:7890"));
