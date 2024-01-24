export const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  { label: "PAGES", type: "label" },
  {
    name: "Session/Auth",
    icon: "security",
    children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      {
        name: "Forgot Password",
        iconText: "FP",
        path: "/session/forgot-password",
      },
      { name: "Error", iconText: "404", path: "/session/404" },
    ],
  },
  { label: "Components", type: "label" },
  {
    name: "Financial analitics",
    icon: "favorite",
    children: [{ name: "Table", path: "/material/table", iconText: "T" }],
  },
  {
    name: "Charts",
    icon: "trending_up",
    children: [{ name: "Echarts", path: "/charts/echarts", iconText: "E" }],
  },
];
