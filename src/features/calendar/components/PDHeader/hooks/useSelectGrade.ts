import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { SelectOption } from "common/interfaces";

type ReturnInterface = {
  handleChangeGrades: (event: SelectChangeEvent<any>) => void;
  selectedGrades: SelectOption[];
  gradeMock: SelectOption[];
};

const gradeMock = [
  { id: 1, label: "Day" },
  { id: 2, label: "Week" },
  { id: 3, label: "Month" },
];

export const useSelectGrade = (): ReturnInterface => {
  const [selectedGrades, setGrades] = useState([]);

  const handleChangeGrades = ({ target }: SelectChangeEvent<any>) => {
    const { value } = target;
    setGrades(value);
  };

  return {
    gradeMock,
    selectedGrades,
    handleChangeGrades,
  };
};
