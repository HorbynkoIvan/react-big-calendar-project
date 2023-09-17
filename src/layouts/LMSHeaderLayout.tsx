import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../features/calendar/components/Header";

export const LMSHeaderLayout = () => (
  <Stack>
    <Header />
    <Stack
      component="main"
      sx={{
        maxWidth: "1620px",
        width: "100%",
        margin: "68px auto 0",
        minHeight: "calc(100vh - 68px)",
        padding: "10px 0",
      }}>
      <Outlet />
    </Stack>
  </Stack>
);
