import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { getProjectChoice } from "./data";
import { useState } from "react";

function App() {
  const[choice, setChoice] = useState(0)

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Projects setChoice={setChoice}/>} />
        <Route path="/project-detail" element={<ProjectDetail index={choice}/>} />
      </Routes>
    </HashRouter >
  );
}

export default App;
