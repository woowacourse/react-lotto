import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { LottoContextProvider } from "./Contexts/LottoContext";

ReactDOM.render(
  <React.StrictMode>
    <LottoContextProvider>
      <App />
    </LottoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
