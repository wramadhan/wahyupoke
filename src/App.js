import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Detail from "./page/Detail";
import Home from "./page/Home";
import { Store } from "./context/Store";
function App() {
  return (
    <Store>
      <Router>
        <div className="fixed z-50 w-full">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </Store>
  );
}

export default App;
