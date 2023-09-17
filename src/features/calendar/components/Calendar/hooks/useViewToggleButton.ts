import { useState, MouseEvent, useEffect } from "react";

const views: any = {
  Month: "month",
  Week: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  Agenda: "agenda",
};

type Return = {
  selectedView: string;
  handleChangeView: (event: MouseEvent<HTMLElement>, newValue: string) => void;
};
export const useViewToggleButton = ({ onView }: any): Return => {
  const [selectedView, setView] = useState("Month");

  useEffect(() => {
    // change Calendar View ex: month, week, agenda
    onView(views[selectedView]);
  }, [onView, selectedView]);

  const handleChangeView = (event: MouseEvent<HTMLElement>, newValue: string) => {
    // at least one button must be active
    if (newValue !== null) {
      setView(newValue);
    }
  };

  return {
    selectedView,
    handleChangeView,
  };
};
