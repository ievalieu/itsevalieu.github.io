import React from "react";
import ReactDOM from "react-dom";
// import { Router, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./containers/App";
// import routes from "./routes.js";
import registerServiceWorker from "./registerServiceWorker";

// const appEntry = <Router history={BrowserRouter}>{routes()}</Router>;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
