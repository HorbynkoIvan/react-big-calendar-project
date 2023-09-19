import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Calendar", path: "/calendar" },
  { label: "Support", path: "/support" },
];

export const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          MUI
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item.label} sx={{ color: "#fff" }} onClick={() => navigate(item.path)}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
