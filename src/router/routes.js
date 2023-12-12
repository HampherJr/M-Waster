const routes = [
  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "login", component: () => import("pages/LoginPage.vue") },
      { path: "register", component: () => import("pages/RegisterPage.vue") },
      { path: "pickup", component: () => import("pages/PickupSchedule.vue") },
      { path: "adminhome", component: () => import("pages/AdminHomePage.vue") },
      { path: "userhome", component: () => import("pages/UserHomePage.vue") },
      { path: "items", component: () => import("pages/ItemsPage.vue") },
      { path: "adminwaste", component: () => import("pages/AdminWasteDetails.vue") },
      

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
