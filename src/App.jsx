import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Router>
        <div className="h-screen bg-blue-200 dark:bg-slate-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<TextForm />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
