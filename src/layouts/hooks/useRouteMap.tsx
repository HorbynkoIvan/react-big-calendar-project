import { LMSHeaderLayout, MainRoutesConfig } from "../../layouts";
import { RouteObject } from "react-router-dom";

export const useRouteMap = () => {
  const MainRoutesArray: RouteObject[] = Object.values(MainRoutesConfig);

  const MainRoutes = {
    element: <LMSHeaderLayout />,
    children: MainRoutesArray,
  };

  return {
    MainRoutes,
  };
};
