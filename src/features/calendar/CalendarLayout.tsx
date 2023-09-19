import { ReactNode } from "react";
import { PDHeader, Divider } from "./components";

type CalendarLayoutProps = {
  children: ReactNode;
};

export const CalendarLayout = ({ children }: CalendarLayoutProps) => (
  <>
    <PDHeader />
    <Divider quantity={21} />
    {children}
  </>
);
