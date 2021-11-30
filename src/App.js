import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Pages/Projects/Projects';
import Blog from './Pages/Blog/Blog';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
