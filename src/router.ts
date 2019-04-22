import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import WebsiteProfile from "./views/WebsiteProfile.vue";
import Edits from "./views/Edits.vue";
import ProjectPage from "./views/ProjectPage.vue";

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
      component: WebsiteProfile
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: "/edits",
      name: "edits",
      component: Edits
    },
    {
      path: "/project",
      name: "project",
      component: ProjectPage
    }]
});
