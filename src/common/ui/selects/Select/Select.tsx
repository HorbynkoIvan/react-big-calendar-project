import { FocusEvent } from "react";
import {
  Select as SelectMui,
  SelectProps,
  FormControl,
  MenuItem as MenuItemMui,
  styled,
  OutlinedInput,
  Typography,
  CSSObject,
  FormHelperText,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";

type Option = string | { id: string | number; name: string };

type Props = SelectProps & {
  options: Array<Option>;
  inputStyles?: CSSObject;
  menuItemStyles?: CSSObject;
  helperText?: string;
  error?: boolean;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  maxHeightRatio?: number;
};

const OutlinedInputRoot = styled(OutlinedInput)(({ theme }) => ({
  height: 35,
  width: 150,
  fontSize: 14,
  background: theme.palette.grey[50],
  borderRadius: "8px",

  "&.Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.grey[200],
      transition: theme.transitions.create(["border-color"]),
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.palette.grey[200]}`,
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

const getOptionKey = (option: Option): string => {
  if (typeof option === "string") {
    return option;
  } else {
    return String(option.id);
  }
};

const getOptionValue = (option: Option): string => {
  if (typeof option === "string") {
    return option;
  } else {
    return option.id as string;
  }
};
const getOptionLabel = (option: Option): string => {
  if (typeof option === "string") {
    return option;
  } else {
    return option.name;
  }
};

export const Select = ({
  label,
  options,
  inputStyles,
  menuItemStyles,
  placeholder,
  helperText,
  error,
  onBlur,
  maxHeightRatio = 4.5,
  ...props
}: Props) => (
  <div>
    <Typography variant="subtitle2">{label}</Typography>

    <FormControl fullWidth>
      <SelectMui
        {...props}
        id="select"
        IconComponent={MdExpandMore}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: ITEM_HEIGHT * maxHeightRatio + ITEM_PADDING_TOP,
            },
          },
        }}
        input={<OutlinedInputRoot sx={inputStyles} placeholder={placeholder} />}
        error={error}
        onBlur={onBlur}
        displayEmpty>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => {
          return (
            <MenuItem
              key={getOptionKey(option)}
              value={getOptionValue(option)}
              disableRipple
              sx={menuItemStyles}>
              {getOptionLabel(option)}
            </MenuItem>
          );
        })}
      </SelectMui>
      <FormHelperText error sx={{ marginLeft: 0 }}>
        {helperText}
      </FormHelperText>
    </FormControl>
  </div>
);
