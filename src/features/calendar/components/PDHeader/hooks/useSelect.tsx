import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { SelectOption } from "common/interfaces";

type ReturnInterface = {
  handleChangeSubjects: (event: SelectChangeEvent<any>) => void;
  selectedSubjects: SelectOption[];
  subjectsMock: SelectOption[];
};

const subjectsMock = [
  { id: 1, label: "Day1" },
  { id: 2, label: "Week1" },
  { id: 3, label: "Month1" },
];

export const useSelect = (): ReturnInterface => {
  const [selectedSubjects, setGrades] = useState([]);

  const handleChangeSubjects = ({ target }: SelectChangeEvent<any>) => {
    const { value } = target;
    setGrades(value);
  };

  return {
    subjectsMock,
    selectedSubjects,
    handleChangeSubjects,
  };
};
