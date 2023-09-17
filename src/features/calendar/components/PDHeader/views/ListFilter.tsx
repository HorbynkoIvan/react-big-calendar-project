import { Stack, TextField } from "@mui/material";
import { Datepicker } from "./Datepicker";
import { useDatepicker } from "../hooks";

export const ListFilter = () => {
  const { date, handleChangeDate } = useDatepicker();

  return (
    <Stack direction="row" spacing={4}>
      <Datepicker
        label="From:"
        value={date}
        onChange={handleChangeDate}
        renderInput={(params) => <TextField {...params} />}
      />
      <Datepicker
        label="To:"
        value={date}
        onChange={handleChangeDate}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  );
};
