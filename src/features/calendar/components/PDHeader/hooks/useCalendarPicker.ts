import { useState, useEffect, useRef, RefObject, Dispatch, SetStateAction } from "react";
import moment, { Moment } from "moment";

type Return = {
  date: Moment | null;
  handleChangeDate: (newDate: Moment | any) => void;
  openMonth: boolean;
  setOpenMonth: Dispatch<SetStateAction<boolean>>;
  ref: RefObject<HTMLDivElement>;
};

export const useCalendarPicker = (): Return => {
  const [openMonth, setOpenMonth] = useState<boolean>(false);
  const [date, setDate] = useState<Moment | null>(moment());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenMonth(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleChangeDate = (newDate: Moment | any) => {
    setDate(newDate);
    setOpenMonth((prev) => !prev);
  };

  return {
    ref,
    date,
    handleChangeDate,
    openMonth,
    setOpenMonth,
  };
};
