import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { Home } from "./pages/home";
import { Movie } from "./pages/movie/movie";
import { TvShow } from "./pages/tvshow/tvshow";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/saved" element={<h1>Saved</h1>}></Route>
          <Route path="/movie/:id" element={<Movie/>}></Route>
          <Route path="/tv/:id" element={<TvShow />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
