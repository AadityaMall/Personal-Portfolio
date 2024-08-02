import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
const NavBar = lazy(() => import("./Components/Layout/Navbar"));
const Particle = lazy(() => import("./Components/Layout/Particles"));
const Home = lazy(() => import("./Components/Home/Home"));
const Loader = lazy(() => import("./Components/Layout/Loader/Loader"));
function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Particle />
        <div>
          <Routes>
            <Route path={`/*`} element={<Home />} />
            <Route path={`/home`} element={<Home />} />
          </Routes>
        </div>

        {/* <Footer /> */}
      </Suspense>
    </>
  );
}

export default App;
