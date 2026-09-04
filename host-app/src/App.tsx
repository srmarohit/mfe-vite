import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

const SportsNews = lazy(() => import("sports/SportsNews"));
const PoliticsNews = lazy(() => import("politics/PoliticsNews"));

export default function App() {
  return (
    <div>
      <div className="panel">Microfrontend </div>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/sports">Sports MFE</NavLink>
          <NavLink to="/politics">Politics MFE</NavLink>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<section className="panel">Host Panel</section>}
          />
          <Route
            path="/sports"
            element={
              <Suspense fallback={<div>loading</div>}>
                <SportsNews />
              </Suspense>
            }
          />
          <Route
            path="/politics"
            element={
              <Suspense fallback={<div>loading</div>}>
                <PoliticsNews />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
