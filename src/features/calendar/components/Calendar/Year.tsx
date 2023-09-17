import { Navigate, ViewProps, DateLocalizer } from "react-big-calendar";
import { Grid } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function YearView({ date, localizer, onView, onNavigate, events }: ViewProps) {
  const currRange = YearView.range(date, { localizer });

  return (
    <Grid container display={"grid"} style={{ gridTemplateColumns: "repeat(3, 1fr)" }} gap={6}>
      {currRange.map((month, index) => {
        return (
          <Grid item width={"100%"} key={index}>
            <Calendar
              activeStartDate={month}
              tileClassName={({ date, view }) => {
                if (
                  view === "month" &&
                  events?.find((event) => {
                    moment(event.start).isSame(moment(date), "day");
                  })
                ) {
                  return "event-day";
                }
                return null;
              }}
              onClickDay={(day) => {
                onView && onView("day");
                onNavigate(day);
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

YearView.range = (date: Date, { localizer }: { localizer: DateLocalizer }) => {
  const start = localizer.startOf(date, "year");
  const end = localizer.endOf(date, "year");

  const range = [];
  let current = start;

  while (localizer.lte(current, end, "year")) {
    range.push(current);
    current = localizer.add(current, 1, "month");
  }
  return range;
};

YearView.navigate = (date: Date, action: any, { localizer }: { localizer: DateLocalizer }) => {
  if (action instanceof Date) return action;

  switch (action) {
    case Navigate.NEXT:
      return localizer.add(date, 1, "year");
    case Navigate.PREVIOUS:
      return localizer.add(date, -1, "year");
    default:
      return date;
  }
};

YearView.title = (date: Date, { localizer }: { localizer: DateLocalizer }) => {
  return localizer.format(date, "YYYY");
};
