import Home from "./pages/Home";

import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./assets/style/sass/main/app.sass";

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home className={`home-container`} />}
          />
          <Route
            path="/about"
            element={<About className={`about-container`} />}
          />
          <Route
            path="/contact"
            element={<Contact className={`contact-container`} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
