import { styled, ButtonProps } from "@mui/material";
import { Button } from "./Button.tsx";

type Props = ButtonProps & {
  active?: number;
  // active?: boolean;
};

export const ButtonFilter = styled(Button)<Props>(({ theme, active }) => ({
  height: "44px",
  color: active ? theme.palette.primary.main : theme.palette.grey[800],
  borderRadius: "8px",
  padding: "0 24px",
  border: "1px solid",
  borderColor: active ? theme.palette.primary.main : theme.palette.grey[300],
  backgroundColor: "#ffffff",
  transition: theme.transitions.create("backgroundColor", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    backgroundColor: "grey",
  },
  "&:active, &:focus": {},
  "& .MuiButton-startIcon": {
    color: active ? theme.palette.primary.main : theme.palette.grey[500],
  },
}));
