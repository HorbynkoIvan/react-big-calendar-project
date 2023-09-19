import { Stack } from "@mui/material";
// import { PDTopFilter } from "./views";
// import { useLocation, useNavigate } from "react-router-dom";

// const MyTabs = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//
//   const handleChange = (event, newValue) => {
//     navigate(newValue);
//   };
//
//   return (
//     <Tabs value={location.pathname} onChange={handleChange}>
//       <Tab label="List view" value="/" />
//       <Tab label="Calendar" value="calendar" />
//     </Tabs>
//   );
// };

export const PDHeader = () => {
  return (
    <Stack direction="column" sx={{ mb: 2 }}>
      <Stack
        direction="row"
        sx={{ margin: "20px 0 0", width: "100%" }}
        alignItems="center"
        justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          {/* <MyTabs /> */}

          {/* <PDTopFilter /> */}
        </Stack>
      </Stack>
    </Stack>
  );
};
