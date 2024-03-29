import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import LayoutDefault from "./layout/LayoutDefault";
import Blog from "./pages/Blog";
import BlogRelad from "./pages/Blog/BlogRelad";
import BlogNew from "./pages/Blog/BlogNew";
import BlogAll from "./pages/Blog/BlogAll";
import BlogDetail from "./pages/Blog/BlogDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />}>
            <Route index element={<BlogAll />}></Route>
            <Route path="relad" element={<BlogRelad />}></Route>
            <Route path="new" element={<BlogNew />}></Route>
            <Route path=":id" element={<BlogDetail />}></Route>
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
