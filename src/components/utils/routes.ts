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
    component: "B",
    name: "Продукт",
  },
  {
    path: "/contact",
    exact: false,
    component: "Contact",
    name: "Контакты",
  },
];