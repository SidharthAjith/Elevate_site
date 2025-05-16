import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} || Elevate | Engineering Manpower Staffing & Services
      </title>
      <meta
        name="description"
        content="Find skilled engineering talent with Elevate. Explore our staffing services and apply for top field service and technical roles across major industries."
      />
    </Helmet>
  );
};

export default HelmetReact;
