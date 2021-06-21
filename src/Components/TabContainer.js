import React, { useState } from "react";

import TabHeader from "./TabHeader";
import TabContent from "./TabContent";

const TabContainer = () => {
  // state witch form to display  login || register
  const [filter, setFilter] = useState("login");
  return (
    <div className="tab-container">
      <div className="tab-header">
        <TabHeader filter={filter} setFilter={setFilter} />
      </div>
      <TabContent filter={filter} />
    </div>
  );
};

export default TabContainer;
