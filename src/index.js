import React from "react";
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import App from './App';
import store from '../src/app/store'
import 'antd/dist/antd.css'
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
    <Router>
        <Provider store={store}>
        <App/>
        </Provider>
    </Router>
)