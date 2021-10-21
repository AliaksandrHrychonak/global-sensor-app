import { IRoutes } from "../../types";

export const routes: Array<IRoutes> = [
  {
    path: "/",
    exact: true,
    component: "Main",
    name: "Главная",
  },
  {
    path: "/bubblegum",
    exact: false,
    component: "Main",
    name: "Продукт",
  },
  {
    path: "/shoelaces",
    exact: false,
    component: "Main",
    name: "Контакты",
  },
];