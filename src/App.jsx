import "./App.css";
import ProductPrice from "./components/ProductPrice";
import ProductSize from "./components/ProductSize";
import ShippingCostPerKg from "./components/ShippingCostPerKg";
import TotalPrice from "./components/TotalPrice";

function App() {
  return (
    <>
      <ShippingCostPerKg />
      <ProductPrice />
      <ProductSize />
      <TotalPrice />
    </>
  );
}

export default App;
