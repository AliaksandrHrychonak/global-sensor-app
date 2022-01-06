import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,

  document.getElementById("root")
);
reportWebVitals();
