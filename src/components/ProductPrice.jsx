const ProductPrice = ({currency,setProductPrice}) => {
  const handleChange = (e)=> {
    if(currency === 'bd'){
      setProductPrice(e.target.value * 125)
    }else if(currency === 'qa'){
      setProductPrice(e.target.value * 3.65)
    }
  }
  return (
    <div className="shippingCostPerKg">
      <label htmlFor="productPrice">Product Price </label>
      <input
        id="productPrice"
        type="number"
        placeholder="Amount in Doller $"
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductPrice;
