import TheRouter from "./components/Router/TheRouter";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <TheRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
