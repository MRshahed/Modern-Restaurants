import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app_menuitem" id="menu">
    <div className="app_menuitem-head">
      <div className="app_menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      <div className="app_menuitem-dash"></div>

      <div className="app_menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
     
     <div className="app_menuitem-tags">
      <p className="p__opensans" style={{color:'#AAA'}}>{tags}</p>
     </div>

  </div>
);

export default MenuItem;
