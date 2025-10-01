// import {Route , Routes } from "react-router"
import HomePage from "./page/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
  );
}

export default App;