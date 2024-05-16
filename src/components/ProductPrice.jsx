import React from "react";

const ProductPrice = () => {
  return (
    <div className="shippingCostPerKg">
      <label htmlFor="productPrice">Product Price </label>
      <input id="productPrice" type="number" placeholder="Shipping Cost Per KG" />
      <select name="cars" id="cars" className="select">
        <option value="volvo">BDT</option>
        <option value="saab">QTA</option>
      </select>
    </div>
  );
};

export default ProductPrice;
