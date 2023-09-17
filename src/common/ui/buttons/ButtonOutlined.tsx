import { Button } from "../buttons";
import { styled } from "@mui/material";

export const ButtonOutlined = styled(Button)(({ width, border }) => ({
  width: `${width}px`,
  height: "32px",
  padding: 0,
  border: border,
  borderRadius: "8px",
}));
