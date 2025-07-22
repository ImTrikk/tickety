import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1 className="text-2xl">Hello world</h1>} />
    </Routes>
  </BrowserRouter>
 );
}

export default App;
