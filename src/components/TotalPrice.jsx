import { useEffect, useState } from "react";

const TotalPrice = ({ productSize, productPrice, shippingCostPerKg }) => {
  const [data, setData] = useState();
  const [isAllProductHere,setIsAllProductHere] = useState(false)

  useEffect(() => {
    let singleProductShippingCost = shippingCostPerKg / productSize;
    let result = productPrice + singleProductShippingCost;
    setData(result);
    if(productPrice==="" || shippingCostPerKg===""||productSize===""){
      setIsAllProductHere(false)
    }else{
      setIsAllProductHere(true)
    }
  }, [productSize, productPrice, shippingCostPerKg]);
  return (
    <div style={{margin:'auto'}}>
      <p style={{fontSize: '1.5rem',fontWeight:'700'}}>Total Price : {isAllProductHere ? data : 0}</p> 
    </div>
  );
};

export default TotalPrice;
