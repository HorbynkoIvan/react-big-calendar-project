import {
  ToggleButton,
  ToggleButtonGroup as ToggleButtonGroupMui,
  ToggleButtonGroupProps,
  Typography,
  styled,
} from "@mui/material";

export type ButtonsMenu = {
  id: number;
  name: string;
};

const StyledToggleButtonGroup = styled(ToggleButtonGroupMui)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "8px",
  height: "32px",
  overflow: "hidden",
  ".MuiToggleButton-root.Mui-selected": {
    color: theme.palette.primary.contrastText,
  },
  ".MuiButtonBase-root": {
    color: theme.palette.primary.contrastText,
  },
  "& .MuiToggleButtonGroup-grouped": {
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {},
    "&:first-of-type": {},
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

type Props = ToggleButtonGroupProps & { buttonsMenu: ButtonsMenu[] };

export const ToggleButtonGroup = ({ buttonsMenu, ...props }: Props) => (
  <StyledToggleButtonGroup exclusive aria-label="Platform" {...props}>
    {buttonsMenu.map(({ id, name }) => (
      <ToggleButton key={id} value={name}>
        <Typography variant="button" textTransform="initial">
          {name}
        </Typography>
      </ToggleButton>
    ))}
  </StyledToggleButtonGroup>
);
