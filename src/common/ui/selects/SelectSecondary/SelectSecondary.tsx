import {
  Select as SelectMui,
  SelectProps,
  FormControl,
  MenuItem as MenuItemMui,
  styled,
  OutlinedInput,
  Typography,
  Box,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { MdExpandMore } from "react-icons/md";

type Props = SelectProps & { options: string[] };

const OutlinedInputRoot = styled(OutlinedInput)(({ theme }) => ({
  marginTop: "10px",
  border: "none",
  height: 48,
  fontSize: 13,
  background: theme.palette.grey[50],
  borderRadius: "8px",
  ".MuiSelect-icon": {
    color: theme.palette.grey[300],
  },
  "&.Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      transition: theme.transitions.create(["border-color"]),
      "& :hover": {
        border: "none",
      },
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    borderRadius: "8px",
  },
}));

const MenuItem = styled(MenuItemMui)(({ theme }) => ({
  "&.MuiMenuItem-root": {
    padding: "16px",
    "&.Mui-selected": { background: theme.palette.grey[100] },
    "&.Mui-selected:hover": { background: theme.palette.grey[50] },
  },
}));

const ITEM_HEIGHT = 44;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  sx: {
    "& .MuiMenu-paper": {
      background: grey[50],
      borderRadius: "8px",
    },
  },
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export const SelectSecondary = ({ label, options, sx, ...props }: Props) => (
  <Box sx={sx}>
    <Typography variant="subtitle1" fontWeight={800} color={grey[600]}>
      {label}
    </Typography>
    <FormControl fullWidth>
      <SelectMui
        {...props}
        id="select"
        IconComponent={MdExpandMore}
        MenuProps={MenuProps}
        input={<OutlinedInputRoot />}>
        {options.map((option) => (
          <MenuItem key={option} value={option} disableRipple>
            {option}
          </MenuItem>
        ))}
      </SelectMui>
    </FormControl>
  </Box>
);
