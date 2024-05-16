const ShippingCostPerKg = ({setShippingCostPerKg}) => {
  return (
    <div className="shippingCostPerKg">
      <label htmlFor="perKg">Shipping Cost Per KG</label>
      <input
        id="perKg"
        type="number"
        placeholder="Shipping Cost Per KG"
        onChange={(e)=> setShippingCostPerKg(e.target.value)}
      />
    </div>
  );
};

export default ShippingCostPerKg;
