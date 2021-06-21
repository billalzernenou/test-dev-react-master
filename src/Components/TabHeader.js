import React from "react";

const TabHeader = ({ filter, setFilter }) => {
  // handle Toggle login Register <
  const handleButton = (actionType) => {
    if (actionType === "login") {
      setFilter("login");
    } else if (actionType === "register") {
      setFilter("register");
    }
  };
  return (
    <div className="tab-header">
      <button
        data-testid="login"
        className={filter === "login" ? "selected-button" : ""}
        onClick={() => handleButton("login")}
      >
        J'ai un compte
      </button>
      <button
        data-testid="register"
        className={filter === "register" ? "selected-button" : ""}
        onClick={() => handleButton("register")}
      >
        Je n'ai pas de compte
      </button>
    </div>
  );
};

export default TabHeader;
