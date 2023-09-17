import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
