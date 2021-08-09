import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "@/views/Homepage.vue";
import About from "@/views/About.vue";
import ContactMe from "@/views/ContactMe.vue";
import Page404 from "@/views/Page404.vue";
import Signin from "@/views/user/Signin.vue";
import Signup from "@/views/user/Signup.vue";
import LiveChat from "@/views/LiveChat.vue";

import UpcomingEvents from "@/views/UpcomingEvents.vue";
import PreviousRoles from "@/views/PreviousRoles.vue";
import AdminScreen from "@/views/admin/Dashboard.vue";
import ManageActingCredits from "@/views/admin/ManageActingCredits.vue";
import UpdateActingCredits from "@/views/admin/UpdateActingCredits.vue";
import AddNewActingCredit from "@/views/admin/AddNewActingCredit.vue";
import AdminActingCreditStatistics from "@/views/admin/AdminActingCreditStatistics.vue";

import AdminLive from "@/views/admin/AdminLive.vue";
import AdminLiveChat from "@/views/admin/AdminLiveChat.vue";
import AdminLiveStatistics from "@/views/admin/AdminLiveStatistics.vue";
import ManageEvents from "@/views/admin/ManageEvents.vue";
import UpdateEvents from "@/views/admin/UpdateEvents.vue";
import AddNewEvent from "@/views/admin/AddNewEvent.vue";
import AdminEventStatistics from "@/views/admin/AdminEventStatistics.vue";
import shouldNotBeVisitingAdminScreen from "@/helpers/shouldNotBeVisitingAdminScreen.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage
  },
  {
    path: "/live-chat",
    component: LiveChat
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact-me",
    name: "Contact Me",
    component: ContactMe
  },
  {
    path: "/previous-roles",
    name: "PreviousRoles",
    component: PreviousRoles
  },
  {
    path: "/upcoming-events",
    name: "UpcomingEvents",
    component: UpcomingEvents
  },

  {
    name: "Sign In",
    path: "/signin",
    component: Signin
  },
  {
    path: "/signup",
    component: Signup
  },
  {
    path: "/admin",
    component: AdminScreen
  },

  {
    path: "/admin/manage-acting-credits",
    component: ManageActingCredits
  },
  {
    path: "/admin/manage-acting-credits/update",
    component: UpdateActingCredits
  },
  // {
  //   path: '/admin/manage-acting-credits/statistics',
  //   component: AdminActingCreditStatistics
  // },
  {
    path: "/admin/manage-acting-credits/new",
    component: AddNewActingCredit
  },
  {
    path: "/admin/events/update",
    component: UpdateEvents
  },
  {
    path: "/admin/events/new",
    component: AddNewEvent
  },
  // {
  //   path: '/admin/events/statistics',
  //   component: AdminEventStatistics
  // },
  {
    path: "/admin/live",
    component: AdminLive
  },
  {
    path: "/admin/live/chat/new",
    component: AdminLiveChat
  },
  // {
  //   path: '/admin/live/chat/statistics',
  //   component: AdminLiveStatistics
  // },
  {
    path: "/admin/events",
    component: ManageEvents
  },
  {
    path: "/admin/events/update",
    component: UpdateEvents
  },
  {
    name: "404",
    path: "*",
    component: Page404
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (shouldNotBeVisitingAdminScreen() && to.path.includes("admin")) {
    next({ name: "Sign In" });
  } else {
    next();
  }
});

export default router;
