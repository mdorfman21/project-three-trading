import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { makeMainRoutes } from "./components_login/Routes";
const routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById("root"));
registerServiceWorker();
