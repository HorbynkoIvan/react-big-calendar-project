import { Dashboard, NoMatch, CalendarFeature } from "../features";

type RouteType = {
  path: string;
  element: any;
};

export const MainRoutesConfig: Record<string, RouteType> = {
  dashboard: { path: "/", element: <Dashboard /> },
  calendar: { path: "/calendar/*", element: <CalendarFeature /> },
  support: { path: "/support", element: <h1>Support</h1> },
  noMatch: { path: "*", element: <NoMatch /> },
};
