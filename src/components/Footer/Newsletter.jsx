import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app_newsletter">
    <div className="app_newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant"> Subscribe to our Newsletter</h1>
      <p className="p__opensans">And never miss latest updates!</p>
    </div>
    <div className="app_newsletter-input flex__center">
      <input type="email" placeholder="Enter your Email Address" />
      <button type="button" className="custom__button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
