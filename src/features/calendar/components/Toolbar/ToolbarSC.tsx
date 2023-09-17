import { styled, Toolbar as ToolbarMui, ToolbarProps } from "@mui/material";

export const ToolbarSC = styled((props: ToolbarProps) => <ToolbarMui {...props} disableGutters />)(
  () => ({
    height: "66px",
    paddingLeft: "28px",
    paddingRight: "11px",
    borderTop: "1px solid #E3E5ED",
    borderLeft: "1px solid #E3E5ED",
    borderRight: "1px solid #E3E5ED",
    borderRadius: "8px 8px 0px 0px",
  })
);
