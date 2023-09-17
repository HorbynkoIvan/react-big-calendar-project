import { Button, styled, ButtonProps, Icon } from "@mui/material";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type Props = ButtonProps;

export const ButtonBack = styled((props: Props) => {
  const navigate = useNavigate();

  return (
    <Button {...props} startIcon={<Icon component={MdArrowBack} />} onClick={() => navigate(-1)} />
  );
})(({ theme }) => ({
  padding: "6px 12px",
  textTransform: "initial",
  borderRadius: "8px",
  border: "1px solid",
  borderColor: theme.palette.grey[200],
  color: theme.palette.grey[600],
  backgroundColor: "#ffffff",
  position: "relative",
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
  "&:active, &:focus": {},
  "& .MuiButton-startIcon": {
    "& svg": {
      color: theme.palette.grey[600],
      fontSize: "16px",
    },
  },
}));
