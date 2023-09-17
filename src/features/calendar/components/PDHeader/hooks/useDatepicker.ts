import { useState } from "react";
import moment, { Moment } from "moment";

type Return = {
  date: Moment | null;
  handleChangeDate: (newDate: Moment | any) => void;
};

export const useDatepicker = (): Return => {
  const [date, setDate] = useState<Moment | null>(moment());

  const handleChangeDate = (newDate: Moment | any) => {
    setDate(newDate);
  };

  return {
    date,
    handleChangeDate,
  };
};
