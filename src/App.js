import Home from "./Components/js/Home";
import Blog from "./Components/js/Blog";
import Game from "./Components/js/Game";
import Tech from "./Components/js/Tech";
import Settings from "./Components/js/Settings";
import Navigation from "./Components/js/Navigation";
import Heading from "./Components/js/Heading";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>

        <Heading />
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/game" element={<Game />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

     </Router>

    </>
  );
}

export default App;
