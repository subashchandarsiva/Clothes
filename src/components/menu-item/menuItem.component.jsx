import React from "react";
import "./menuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, id }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP HERE</span>
    </div>
  </div>
);

export default MenuItem;
