import React, { useEffect } from "react";

const FSEHubspotForm = () => {
  useEffect(() => {
    const loadForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "242727752",
          formId: "b0fc733c-d5ea-4103-8fcf-1d1177ace760",
          target: "#hubspotForm"
        });
      }
    };

    // If hbspt is already loaded, use it
    if (window.hbspt) {
      loadForm();
    } else {
      // Otherwise, dynamically load the script
      const script = document.createElement("script");
      script.src = "https://js-na2.hsforms.net/forms/v2.js";
      script.async = true;
      script.onload = () => loadForm();
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="hubspotForm" className="mt-6" />
  );
};

export default FSEHubspotForm;
