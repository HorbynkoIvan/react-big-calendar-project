import { styled, IconButton, IconButtonProps } from "@mui/material";

type Props = IconButtonProps & {
  open: boolean | string;
  width?: number;
  height?: number;
};

export const IconButtonCollapse = styled((props: Props) => <IconButton {...props} />)(
  ({ open, width, height }) => ({
    width: `${width}px` || "24px",
    height: `${height}px` || "24px",
    padding: 0,
    transform: !open ? "rotate(0deg)" : "rotate(180deg)",
    transition: "transform 0.3s ease-in-out",
  })
);
