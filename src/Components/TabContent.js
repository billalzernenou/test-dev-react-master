import React from "react";
import Login from "./Form/Login";
import RegisterForm from "./Form/RegisterForm";

const TabContent = ({ filter }) => {
  return (
    <div className="tab-content">
      {filter === "login" ? <Login /> : <RegisterForm />}
    </div>
  );
};

export default TabContent;
