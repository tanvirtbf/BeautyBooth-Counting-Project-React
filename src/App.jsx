import { useState } from "react";
import "./App.css";
import ProductPrice from "./components/ProductPrice";
import ProductSize from "./components/ProductSize";
import ShippingCostPerKg from "./components/ShippingCostPerKg";
import TotalPrice from "./components/TotalPrice";
import Currency from "./components/Currency";

function App() {

  const [currency,setCurrency] = useState()



  return (
    <div className="mainDiv">
      <Currency setCurrency={setCurrency}/>
      <ShippingCostPerKg />
      <ProductPrice />
      <ProductSize />
      <TotalPrice />
    </div>
  );
}

export default App;
