import type { AppRouteRecordRaw } from "/@/router/types/types";
import { LAYOUT } from "../baseRoute";

const homeRoutes: AppRouteRecordRaw[] = [
  {
    path: "/order",
    name: "Order",
    component: LAYOUT,
    redirect: "/order/index",
    meta: {
      title: "订单管理",
      icon: "list",
      menuNum: 20,
    },
    children: [
      {
        path: "index",
        name: "Order",
        component: () => import("/@/views/order/index.vue"),
        meta: {
          title: "订单管理",
          hideMenu: true,
        },
      },
    ],
  },
];

export default homeRoutes;
