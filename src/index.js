import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Assignment from "./routes/assignment";
import Contact from "./routes/contract";
import Teacher from "./routes/teacher";

import NotFound from "./teachers/notFound";
import AddTeacher from "./teachers/addTeacher";
import Homepage from "./homepage/homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="homepage" element={<Homepage />}></Route>
      <Route exact path="teachers" element={<Teacher />}></Route>
      <Route exact path="add" element={<AddTeacher />} />
      <Route exact path="teachers/edit/:id" element={<AddTeacher />} />
      <Route exact path="assignments" element={<Assignment />}></Route>
      <Route exact path="contracts" element={<Contact />}></Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
