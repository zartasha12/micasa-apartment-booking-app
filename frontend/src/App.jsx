import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/layout";
import Register from "./pages/Register";
import Mainpage from "./pages/Mainpage";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Mainpage />
            </Layout>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
