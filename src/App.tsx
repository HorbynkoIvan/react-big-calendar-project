import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
