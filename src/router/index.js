import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DestinationsView from "@/views/DestinationsView.vue";
import CrewView from "@/views/CrewView.vue";
import TechnologyView from "@/views/TechnologyView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/destinations",
    name: "destinations",
    component: DestinationsView,
  },
  {
    path: "/crew",
    name: "crew",
    component: CrewView,
  },
  {
    path: "/technology",
    name: "technology",
    component: TechnologyView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
