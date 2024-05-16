import { useState } from "react";
import "./App.css";
import ProductPrice from "./components/ProductPrice";
import ProductSize from "./components/ProductSize";
import ShippingCostPerKg from "./components/ShippingCostPerKg";
import TotalPrice from "./components/TotalPrice";
import Currency from "./components/Currency";

function App() {

  const [currency,setCurrency] = useState('bdt')
  const [shippingCostPerKg,setShippingCostPerKg] = useState(0)
  const [productPrice,setProductPrice] = useState(0)
  const [productSize,setProductSize] = useState(0)
  



  return (
    <div className="mainDiv">
      <Currency setCurrency={setCurrency}/>
      <ShippingCostPerKg setShippingCostPerKg={setShippingCostPerKg}/>
      <ProductPrice currency={currency} setProductPrice={setProductPrice}/>
      <ProductSize setProductSize={setProductSize}/>
      <TotalPrice shippingCostPerKg={shippingCostPerKg} productPrice={productPrice} productSize={productSize}/>
    </div>
  );
}

export default App;
