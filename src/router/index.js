import { createRouter, createWebHistory } from "vue-router";
import store from "../store"; // Adjust the path based on your project structure

// Lazy-load components
const DataChart = () => import("../components/DataChart.vue");
const MapComponent = () => import("../components/MapComponent.vue");
const ChatBot = () => import("../components/ChatBot.vue");
const ContactForm = () => import("../components/ContactForm.vue");
const Dashboard = () => import("../components/Dashboard.vue");
const Profile = () => import("../components/Profile.vue");
const Settings = () => import("../components/Settings.vue");
const Admin = () => import("../components/Admin.vue");
const AdvancedComponent1 = () => import("../components/AdvancedComponent1.vue");
const AdvancedComponent2 = () => import("../components/AdvancedComponent2.vue");
const AdvancedComponent3 = () => import("../components/AdvancedComponent3.vue");

const routes = [
  { path: "/profile/:userId", component: Profile, name: "profile" },
  { path: "/data-chart", component: DataChart, name: "data-chart" },
  { path: "/map", component: MapComponent, name: "map" },
  { path: "/chatbot", component: ChatBot, name: "chatbot" },
  { path: "/contact", component: ContactForm, name: "contact" },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      { path: "profile", component: Profile },
      { path: "settings", component: Settings },
    ],
  },
  { path: "/admin", component: Admin, meta: { requiresAuth: true } },
  { path: "/advanced-1", component: AdvancedComponent1 },
  { path: "/advanced-2", component: AdvancedComponent2 },
  { path: "/advanced-3", component: AdvancedComponent3 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.state.isAuthenticated) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
