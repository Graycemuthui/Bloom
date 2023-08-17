import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./authentication/User";
import Signup from "./authentication/Signup";
import PrivateText from "./authentication/Privatetext";
import Login from "./authentication/Login";
import Dashboarduser from "./components/Dashboard_user";
import Survey from "./pages/Survey";

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<User currUser={currUser} setCurrUser={setCurrUser} />}
        />
        <Route path="/private" element={<PrivateText currUser={currUser} />} />
        <Route path="/signup" element={<Signup currUser={currUser} />} />
        <Route path="/login" element={<Login currUser={currUser} />} />
        <Route path="/dashboarduser" element={<Dashboarduser />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
};

export default App;
