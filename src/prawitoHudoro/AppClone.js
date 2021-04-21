import React from "react";

function AppClone() {
  return (
    <div className="card">
      <div className="img-thumb-prod">
        <img src="" alt="" />
      </div>
      <p className="product-title">Laptop Lenovo Ryzen 7 4800u</p>
      <p className="product-price">Rp 19.000.000,-</p>
      <div className="counter">
        <button className="minus">-</button>
        <input type="text" value={3} />
        <button className="plus">+</button>
      </div>
    </div>
  );
}

export default AppClone;
