import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// *Pages
import FirstPage from "../FirstPage/FirstPage";
import DataPage from "../DataPage/DataPage";

const TheRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="datapage" element={<DataPage />} />
        </Routes>
      </BrowserRouter>   
    );
  
  }

export default TheRouter;