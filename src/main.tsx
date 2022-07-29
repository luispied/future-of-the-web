import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { TerminalController } from "./TerminalController/TerminalController";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TerminalController />
  </React.StrictMode>
);
