import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/redux-store";
import { AppFuncComponent } from "./AppFuncComponent";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppFuncComponent />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
