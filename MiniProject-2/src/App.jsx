import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import UserDetails from "./Components/UserDetails/UserDetails";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LandingPage from "./Pages/LandingPage/LandingPage";

// Import Data
import { data } from "./data/userData";
import { userTestimony } from "./data/userTestimony";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage testimonials={userTestimony} />}
          />
          <Route
            path="/Home"
            element={
              <ProtectedRoutes>
                <HomePage />
              </ProtectedRoutes>
            }
          />
          <Route path="/Login" element={<LoginPage />} />
          <Route
            path="/User-Details/:id"
            element={
              <ProtectedRoutes>
                <UserDetails data={data} />
              </ProtectedRoutes>
            }
          />
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
