import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { AddExpensesLayout } from "./layouts/AddExpensesLayout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <Router>
          <Routes>
            <Route path="/" element={<DashboardLayout />} />
            <Route path="/add-expenses" element={<AddExpensesLayout />} />
          </Routes>
        </Router>
      </App>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
