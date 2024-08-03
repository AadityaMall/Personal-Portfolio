import { lazy, Suspense, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
const NavBar = lazy(() => import("./Components/Layout/Navbar"));
const Footer = lazy(() => import("./Components/Layout/Footer"));
const Particle = lazy(() => import("./Components/Layout/Particles"));
const Home = lazy(() => import("./Components/Home/Home"));
const Loader = lazy(() => import("./Components/Layout/Loader/Loader"));
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
            <Route path={`/*`} element={<Home />} />
            <Route path={`/home`} element={<Home />} />
          </Routes>
        </div>

        <Footer />
      </Suspense>
    </>
  );
}

export default App;
