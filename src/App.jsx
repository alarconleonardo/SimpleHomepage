import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageHome from "./PageHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<PageHome />} />
      </Routes>
    </Router>
  );
}

export default App;
