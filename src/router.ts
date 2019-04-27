import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import WebsiteProfile from "./views/WebsiteProfile.vue";
import Edits from "./views/Edits.vue";
import ProjectPage from "./views/ProjectPage.vue";
import Events from "./views/projects/Events.vue";
import Orientation from "./views/projects/Orientation.vue";
import QueueMeIn from "./views/projects/QueueMeIn.vue";
import ResearchConnect from "./views/projects/ResearchConnect.vue";
import Reviews from "./views/projects/Reviews.vue";
import Samwise from "./views/projects/Samwise.vue";
import Shout from "./views/projects/Shout.vue";

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
      path: "/project/events",
      name: "events",
      component: Events
    },
    {
      path: "/project/orientation",
      name: "orientation",
      component: Orientation
    },
    {
      path: "/project/queuemein",
      name: "queuemein",
      component: QueueMeIn
    },
    {
      path: "/project/researchconnect",
      name: "researchconnect",
      component: ResearchConnect
    },
    {
      path: "/project/reviews",
      name: "reviews",
      component: Reviews
    },
    {
      path: "/project/samwise",
      name: "samwise",
      component: Samwise
    },
    {
      path: "/project/shout",
      name: "shout",
      component: Shout
    },
    {
      path: "/project",
      name: "project",
      component: ProjectPage
    }]
});
