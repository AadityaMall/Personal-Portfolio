import { lazy, Suspense, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./Components/Layout/404 Not Found/NotFound";
const NavBar = lazy(() => import("./Components/Layout/Navbar"));
const Footer = lazy(() => import("./Components/Layout/Footer"));
const Particle = lazy(() => import("./Components/Layout/Particles"));
const Home = lazy(() => import("./Components/Home/Home"));
const Loader = lazy(() => import("./Components/Layout/Loader/Loader"));
const Resume = lazy(() => import("./Components/Resume/Resume"));
const Experience = lazy(() => import("./Components/Experience and Projects/Experience"));
const Projects = lazy(() => import("./Components/Experience and Projects/Projects"));
function App() {

  function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [hash]);

    return null;
  }
  return (
    <>
      <ScrollToHash />
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Particle />
        <div>
          <Routes>
            <Route path={`/*`} element={<NotFound />} />
            <Route path={`/`} element={<Home />} />
            <Route path={`/home`} element={<Home />} />
            <Route path={`/resume`} element={<Resume />} />
            <Route path={`/experience`} element={<Experience />} />
            <Route path={`/project`} element={<Projects />} />
          </Routes>
        </div>

        <Footer />
      </Suspense>
    </>
  );
}

export default App;
