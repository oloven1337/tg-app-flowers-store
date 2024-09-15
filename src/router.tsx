import { RouteObject } from "react-router-dom";

import { CatalogPage } from "./pages/catalog";
import { MainPage } from "./pages/main-page";
import { ProductCardPage } from "./pages/product-card-page";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage/>,
    children: []
  },
  {
    path: "/product-card",
    element: <ProductCardPage/>
  },
  {
    path: "/product/:id",
    element: <ProductCardPage/>
  },
  {
    path: "/catalog",
    element: <CatalogPage />
  },
];