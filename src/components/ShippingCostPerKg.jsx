const ShippingCostPerKg = () => {
  return (
    <div className="shippingCostPerKg">
      <label htmlFor="perKg">Shipping Cost Per KG</label>
      <input
        id="perKg"
        type="number"
        placeholder="Shipping Cost Per KG"
      />
    </div>
  );
};

export default ShippingCostPerKg;
