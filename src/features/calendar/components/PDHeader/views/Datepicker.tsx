import { styled, SxProps, TextFieldProps, Typography, Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePickerProps, DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { BiCalendar } from "react-icons/bi";
import { grey } from "@mui/material/colors";

type Props = DatePickerProps<any, any> & TextFieldProps;

const DatePickerRoot = styled(DesktopDatePicker)(({ theme }: any) => ({
  width: "144px",

  "& .MuiOutlinedInput-root": {
    display: "flex",
    flexDirection: "row-reverse",
    height: 44,
    background: theme.palette.white.main,
    border: `1px solid ${grey[200]}`,
    borderRadius: 8,
    color: "#989EB9",
    fontSize: "13px",

    "& fieldset": {
      border: `none`,
      borderRadius: 8,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${grey[800]}`,
    },

    "& .MuiInputBase-input::-webkit-calendar-picker-indicator": {
      cursor: "pointer",
    },

    "& .MuiIconButton-root": {
      color: grey[300],
    },
  },
}));
const paperSx: SxProps = {
  borderRadius: 2,
  background: grey[50],
  "& .MuiButtonBase-root": {
    background: grey[50],
  },
};

export const Datepicker = ({ label, ...props }: Props) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography color={grey[600]} variant="subtitle1">
        {label}
      </Typography>
      <DatePickerRoot
        {...props}
        disabled={false}
        views={["day"]}
        inputFormat="DD.MM.YYYY"
        components={{ OpenPickerIcon: BiCalendar }}
        PaperProps={{ sx: paperSx }}
      />
    </Stack>
  </LocalizationProvider>
);
