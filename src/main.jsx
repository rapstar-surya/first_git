import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./components/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
