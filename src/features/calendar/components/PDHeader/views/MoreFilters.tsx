import { Stack } from "@mui/material";
import { SelectCheckboxes } from "../../../../../common/ui";
import { useSelect } from "../hooks";

export const MoreFilters = () => {
  const { subjectsMock, selectedSubjects, handleChangeSubjects } = useSelect();

  return (
    <Stack direction="row" spacing={3} sx={{ mt: 6 }}>
      <SelectCheckboxes
        sx={{ width: "212" }}
        options={subjectsMock}
        value={selectedSubjects}
        onChange={handleChangeSubjects}
        initialLabel="Topic"
      />
      <SelectCheckboxes
        sx={{ width: "212" }}
        options={subjectsMock}
        value={selectedSubjects}
        onChange={handleChangeSubjects}
        initialLabel="Author"
      />
      <SelectCheckboxes
        sx={{ width: "212" }}
        options={subjectsMock}
        value={selectedSubjects}
        onChange={handleChangeSubjects}
        initialLabel="Credits"
      />
      <SelectCheckboxes
        sx={{ width: "212" }}
        options={subjectsMock}
        value={selectedSubjects}
        onChange={handleChangeSubjects}
        initialLabel="Level"
      />
      <SelectCheckboxes
        sx={{ width: "212" }}
        options={subjectsMock}
        value={selectedSubjects}
        onChange={handleChangeSubjects}
        initialLabel="Tags"
      />
    </Stack>
  );
};
