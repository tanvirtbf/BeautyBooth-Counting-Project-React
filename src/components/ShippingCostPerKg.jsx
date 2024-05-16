import React from "react";

const ShippingCostPerKg = () => {
  return (
    <div className="shippingCostPerKg">
      <label htmlFor="perKg">Shipping Cost Per KG</label>
      <input id="perKg" type="number" placeholder="Shipping Cost Per KG" />
      <select name="cars" id="cars" className="select">
        <option value="volvo">BDT</option>
        <option value="saab">QTA</option>
      </select>
    </div>
  );
};

export default ShippingCostPerKg;
