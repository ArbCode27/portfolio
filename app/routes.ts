import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
  layout("routes/main/layout/MainLayout.tsx", [index("routes/main/home.tsx")]),
] satisfies RouteConfig;
