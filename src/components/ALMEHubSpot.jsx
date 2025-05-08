import React, { useEffect } from "react";

const ALMEHubspotForm = () => {
  useEffect(() => {
    const loadForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "242727752",
          formId: "f8f277a4-8f2d-4e2b-b75a-681109be2394",
          target: "#alme-hubspot-form"
        });
      }
    };

    if (window.hbspt) {
      loadForm();
    } else {
      const script = document.createElement("script");
      script.src = "https://js-na2.hsforms.net/forms/v2.js";
      script.async = true;
      script.onload = () => loadForm();
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="alme-hubspot-form" className="mt-6" />
  );
};

export default ALMEHubspotForm;
