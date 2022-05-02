import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const viewService = lazy(() => import("../pages/bancolombia-pages/view"));
const createService = lazy(() => import("../pages/bancolombia-pages/create"));


export const publicRoute: Route[] = [
  {
    to: "/create-service",
    path: "create-service",
    Component: createService,
    name: "Crear servicio",
  },
  {
    to: "/view-service",
    path: "view-service",
    Component: viewService,
    name: "Visualizar servicio",
  },
];
