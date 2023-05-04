import type { AppRouteRecordRaw } from "/@/router/types/types";
import { LAYOUT } from "../baseRoute";

const homeRoutes: AppRouteRecordRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: LAYOUT,
    redirect: "/home/index",
    meta: {
      title: "首页",
      icon: "House",
      menuNum: 10,
    },
    children: [
      {
        path: "index",
        name: "Home",
        component: () => import("/@/views/home/Home.vue"),
        meta: {
          title: "首页",
          hideMenu: true,
        },
      },
    ],
  },
];

export default homeRoutes;
