import { Calendar } from "./components";
import { Route, Routes } from "react-router-dom";
import { CalendarLayout } from "./CalendarLayout";

export const CalendarFeature = () => (
  <>
    <CalendarLayout>
      <Routes>
        <Route index element={<Calendar />} />
        <Route path="events" element={<h1>CalendarEvents</h1>} />
      </Routes>
    </CalendarLayout>
  </>
);
