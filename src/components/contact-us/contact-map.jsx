import React from "react";

const ContactMap = () => {
  return (
    <div className="google-map-area">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.232591220293!2d80.22169570000001!3d13.0844404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526516fe36f851%3A0x7759c7ac8cea4e93!2sLTE%20Academy!5e0!3m2!1sen!2sin!4v1739608004347!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
