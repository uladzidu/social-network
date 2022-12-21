import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppFuncComponent } from "./AppFuncComponent";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppFuncComponent />
        </Provider>
    </BrowserRouter>
);
