import type { AppRouteRecordRaw } from "/@/router/types/types";
import { LAYOUT } from "../baseRoute";

const tableRoutes: AppRouteRecordRaw[] = [
  {
    path: "/food",
    name: "food",
    component: LAYOUT,
    redirect: "/food/category",
    meta: {
      title: "菜单管理",
      icon: "Food",
      menuNum: 20,
    },
    children: [
      {
        path: "category",
        name: "category",
        component: () => import("/@/views/food/category.vue"),
        meta: {
          title: "品类管理",
        },
      },
      {
        path: "menu",
        name: "menu",
        component: () => import("/@/views/food/menu.vue"),
        meta: {
          title: "菜品管理",
        },
      },
    ],
  },
];

export default tableRoutes;
