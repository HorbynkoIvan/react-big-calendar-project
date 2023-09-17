import { CalendarPickerProps, CalendarPicker as CalendarPickerMui } from "@mui/x-date-pickers";
import { styled, Theme } from "@mui/material";

type PickerProps = CalendarPickerProps<any> & {
  openMonth: boolean;
  theme?: Theme;
};

export const CalendarPicker = styled(CalendarPickerMui)(({ theme, openMonth }: PickerProps) => ({
  width: "215px",
  overflow: "visible",
  position: "relative",

  ".MuiButtonBase-root.MuiIconButton-root": {
    width: "24px",
    height: "24px",
    border: "1px solid #D6D8E3",
    background: theme?.palette.grey[100],
    color: theme?.palette.grey[800],
  },

  ".MuiPickersCalendarHeader-root": {
    margin: 0,
    padding: "0 0 0 8px",
  },

  ".MuiPickersFadeTransitionGroup-root": { fontSize: "16px", fontWeight: 700, cursor: "default" },

  ".MuiPickersFadeTransitionGroup-root.MuiCalendarPicker-viewTransitionContainer": {
    position: "absolute",
    left: -35,
    top: 50,
    zIndex: 10,
    background: theme?.palette.white.main,
    display: openMonth ? "block" : "none",
    borderRadius: "8px",
    border: "1px solid #D6D8E3",
  },
}));
