import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./styles";
import { ThemeProvider } from "@material-tailwind/react";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
