import { Routes, Route } from "react-router-dom";

import { TransitionProvider } from "../context/TransitionContext";
import TransitionComponent from "../components/Transition";
import Scroll from "../views/Scroll";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Register from "../views/Register";

const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          path="/"
          element={
            <TransitionComponent>
              <Home />
            </TransitionComponent>
          }
        />
        <Route
          path="/register"
          element={
            <TransitionComponent>
              <Register />
            </TransitionComponent>
          }
        />
        <Route
          path="*"
          element={
            <TransitionComponent>
              <NotFound />
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  );
};

export default Router;
