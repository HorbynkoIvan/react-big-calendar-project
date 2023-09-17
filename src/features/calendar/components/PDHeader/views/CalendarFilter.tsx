import { BiCalendar } from "react-icons/bi";
import { IconButton, Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useCalendarPicker } from "../hooks";
import { CalendarPicker } from "./CalendarPicker";

export const CalendarFilter = () => {
  const { ref, date, handleChangeDate, openMonth, setOpenMonth } = useCalendarPicker();

  return (
    <Stack direction="row" alignItems="center" ref={ref}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <IconButton
          onClick={() => setOpenMonth(!openMonth)}
          sx={{
            width: "32px",
            height: "32px",
            border: "1px solid #D6D8E3",
            background: "#FFFFFF",
            borderRadius: "8px",
            padding: 0,
          }}>
          <BiCalendar size={21} />
        </IconButton>

        <CalendarPicker
          date={date}
          onChange={handleChangeDate}
          views={["day"]}
          openMonth={openMonth}
        />
      </LocalizationProvider>
    </Stack>
  );
};
