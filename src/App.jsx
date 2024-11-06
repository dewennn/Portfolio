import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <HashRouter  basename="/Portfolio">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter >
  );
}

export default App;
