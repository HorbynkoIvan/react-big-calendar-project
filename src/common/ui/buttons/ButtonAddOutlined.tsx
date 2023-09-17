/* eslint-disable @typescript-eslint/no-unused-vars */
import { ButtonProps, styled } from "@mui/material";
import { Button } from "../buttons";
import { ReactNode } from "react";
import { grey } from "@mui/material/colors";

type Props = ButtonProps & {
  borderColor?: string;
  contentColor?: string;
  startIcon?: ReactNode;
};

export const ButtonAddOutlined = styled(
  ({ borderColor, contentColor, startIcon, ...props }: Props) => (
    <Button disableRipple startIcon={startIcon} {...props} />
  )
)<Props>(({ borderColor, contentColor }) => ({
  maxWidth: "218px",
  width: "100%",
  height: "40px",
  color: contentColor || grey[600],
  border: "1px solid",
  borderColor: borderColor || grey[300],
  borderRadius: "4px",
  transition: "all 0.3s linear",
  "& .MuiButton-startIcon": {
    svg: {
      border: "1px solid",
      borderColor: contentColor || grey[600],
      borderRadius: "8px",
    },
  },
  "&:hover": {
    backgroundColor: grey[100],
  },
  "&:active, &:focus": {},
}));
