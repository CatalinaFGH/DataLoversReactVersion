import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index-styles.css';
// *Componentes
import FirstPage from './components/FirstPage/FirstPage';
import DataPage from './components/DataPage/DataPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<FirstPage />}></Route>
      <Route path="/datapage" element={<DataPage />}></Route>
    </Routes>
  </BrowserRouter>
  
);
