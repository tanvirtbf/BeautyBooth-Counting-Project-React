const ProductSize = ({setProductSize}) => {
  const handleChange = (e) => {
    setProductSize(1000/e.target.value)
  }
  return (
    <div className="shippingCostPerKg">
      <label htmlFor="productSize">Product Size </label>
      <input
        id="productSize"
        type="number"
        placeholder="Shipping Cost Per KG"
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductSize;
