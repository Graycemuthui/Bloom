import React from "react";
import WelcomeMessage from "../pages/Welcome";

const Dashboarduser = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <WelcomeMessage token={token} />
    </div>
  );
};

export default Dashboarduser;
