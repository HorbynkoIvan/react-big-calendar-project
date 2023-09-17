import { useRoutes } from "react-router-dom";
import { useRouteMap } from "../layouts/hooks";

export const Router = () => {
  const { MainRoutes } = useRouteMap();

  const routing = useRoutes([MainRoutes]);

  return routing;
};
