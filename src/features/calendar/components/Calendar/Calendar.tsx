import { useMemo, useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import { useEventsMock } from "./hooks";
import moment from "moment/moment";
import "./sass/styles.scss";
// import { useSelector } from "react-redux";
// import { selectorCurrentView } from "redux/modules/calendar";
import YearView from "./Year";

const localizer = momentLocalizer(moment);

export const Calendar = () => {
  const eventsMock = useEventsMock();
  // const currentView = useSelector(selectorCurrentView);
  const [view, setView] = useState<any>("week");
  const [date, setDate] = useState<any>(new Date());

  const { components, defaultDate } = useMemo(
    () => ({
      components: {
        // toolbar: Toolbar,
      },
      defaultDate: new Date(new Date().setDate(new Date().getDate())),
    }),
    []
  );

  return (
    <BigCalendar
      views={
        {
          day: true,
          week: true,
          month: true,
          year: YearView,
        } as any
      }
      messages={{ year: "Year" } as any}
      defaultView={"month"}
      view={view}
      // view={currentView}
      showMultiDayTimes
      localizer={localizer}
      defaultDate={defaultDate}
      date={date}
      toolbar={true}
      components={components}
      events={eventsMock}
      onNavigate={(newDate) => setDate(newDate)}
      onView={(newView: any) => setView(newView)}
      // onView={() => undefined}
    />
  );
};
