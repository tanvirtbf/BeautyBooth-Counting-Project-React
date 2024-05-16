const ProductPrice = () => {
  return (
    <div className="shippingCostPerKg">
      <label htmlFor="productPrice">Product Price </label>
      <input
        id="productPrice"
        type="number"
        placeholder="Shipping Cost Per KG"
      />
    </div>
  );
};

export default ProductPrice;
