import React, { useEffect } from "react";

const ContactHubSpot = () => {
  useEffect(() => {
    const loadForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "242727752",
          formId: "5216bec1-f065-49cf-9cb4-a4facb820d2f",
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

export default ContactHubSpot;
