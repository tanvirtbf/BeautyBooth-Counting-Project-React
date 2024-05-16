const ProductSize = () => {
  return (
    <div className="shippingCostPerKg">
      <label htmlFor="productSize">Product Size </label>
      <input
        id="productSize"
        type="number"
        placeholder="Shipping Cost Per KG"
      />
    </div>
  );
};

export default ProductSize;
