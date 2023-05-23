import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import { Ordenes } from "./components/pages/Ordenes";
import { BrowserRouter } from "react-router-dom";
import {WebRouter,AdminRouter} from "./router"

function App() {
  return (
   <BrowserRouter>
   <WebRouter/>
   <AdminRouter/>
   </BrowserRouter>
  );
}
export default App;
