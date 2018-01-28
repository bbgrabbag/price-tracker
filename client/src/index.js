import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from "./Redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

render(
    <Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)