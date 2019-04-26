import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/WebsiteProfile.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Admin.vue")
    },
    {
      path: "/edits",
      name: "edits",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Edits.vue")
    },
    {
      path: "/project",
      name: "project",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ProjectPage.vue")
    }
  ]
});
