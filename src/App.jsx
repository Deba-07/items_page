import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AddItem from "./pages/AddItem";
import ViewItem from "./pages/ViewItem";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/view-items" />} />
        <Route path="/view-items" element={<ViewItem />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </Router>
  );
};

export default App;
