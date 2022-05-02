import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Suspense } from "react";

import { publicRoute } from "./routes";
import { NavBar } from "../components/navBar/NavBar";
import { Footer } from "../components/footer/Footer";
import { Loading } from "../components/common/Loading";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          {publicRoute.map(({ to, path, Component }) => {
            return <Route key={to} path={path} element={<Component />} />
      
          })}
          <Route
            path="/*"
            element={<Navigate to={publicRoute[0].to} replace />}
          />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};
