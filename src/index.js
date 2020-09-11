import React from "react";
import ReactDOM from "react-dom";
import { Router, BrowserRouter} from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './app'

// const hist =  createBrowserHistory()

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById("app")
);
