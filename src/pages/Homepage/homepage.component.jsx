import React from "react";
import Directory from "../../components/Directory/directory.component";

import "./homepage.styles.scss";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
};

export default HomePage;
