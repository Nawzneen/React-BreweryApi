import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./Bootstrap.css";
import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";

function App() {
  return (
    <div className="App container ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
