import { useLocation } from "react-router-dom";
import { Stack, Divider } from "@mui/material";
import { SelectCheckboxes, CheckboxGrey } from "../../../../../common/ui";
import { ListFilter, CalendarFilter, FilterSelect } from "../views";
import { useSelectGrade } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { selectorCurrentView, setView } from "../../../../../redux/modules/calendar";
import { grey } from "@mui/material/colors";

const SELECT_WIDTH = 144;
const SELECT_HEIGHT = 44;

export const PDTopFilter = () => {
  const currentView = useSelector(selectorCurrentView);
  const dispatch = useDispatch();
  const { gradeMock, selectedGrades, handleChangeGrades } = useSelectGrade();
  const { pathname } = useLocation();
  const isEventsPath = pathname.endsWith("events");

  return (
    <>
      <Divider
        orientation="vertical"
        sx={{ height: "16px", borderColor: grey[200], margin: "0 12px 0 30px" }}
      />

      {isEventsPath ? <ListFilter /> : <CalendarFilter />}

      <Divider orientation="vertical" sx={{ height: "16px", borderColor: grey[200], mx: "12px" }} />

      <Stack direction="row" spacing={2} sx={{ mr: "20px" }}>
        <FilterSelect
          label="View"
          value={currentView}
          onChange={(e) => dispatch(setView(e.target.value))}
          options={["month", "week", "agenda"]}
          maxHeightRatio={4.5}
          width={144}
        />

        <SelectCheckboxes
          sx={{ width: SELECT_WIDTH, height: SELECT_HEIGHT }}
          options={gradeMock}
          value={selectedGrades}
          onChange={handleChangeGrades}
          initialLabel="Grade level"
        />
        <SelectCheckboxes
          sx={{ width: SELECT_WIDTH, height: SELECT_HEIGHT }}
          options={gradeMock}
          value={selectedGrades}
          onChange={handleChangeGrades}
          initialLabel="Subject"
        />
      </Stack>

      <CheckboxGrey
        label="Show open for registration only"
        sx={{ color: grey[700], userSelect: "none" }}
      />
    </>
  );
};
