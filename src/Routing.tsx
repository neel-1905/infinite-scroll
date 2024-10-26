import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import ImagesPage from "./components/ImagesPage";

const Routing = () => {
  const routing = [
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
    { path: "/images", element: <ImagesPage /> },
  ];

  return (
    <Router>
      <header className="fixed top-0 w-full z-10 shadow-lg">
        <Navbar />
      </header>
      <div className="max-w-5xl mx-auto">
        <Routes>
          {routing.map((item) => {
            return (
              <Route key={item.path} path={item.path} element={item.element} />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default Routing;
