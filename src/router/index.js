import Vue from "vue";
import VueRouter from "vue-router";

//1、安装VueRouter
Vue.use(VueRouter);

//2、获取路由信息
//动态获取pages文件中所有的路由文件
const files = require.context("@/pages", true, /router\.js$/);
const routes = files.keys().map((key) => {
  console.log("key", key);
  const page = require("@/pages" + key.replace(".", ""));
  return page.default;
});

//3、创建路由对象
const router = new VueRouter({
  mode: "history",
  routes,
});

//4、导出
export default router;
