import React, { useEffect, useState } from 'react'

const TotalPrice = ({productSize,productPrice,shippingCostPerKg}) => {
  const [data,setData] = useState()



    useEffect(()=> {
      let singleProductShippingCost = shippingCostPerKg / productSize;
      let result = productPrice + singleProductShippingCost;
      setData(result)
    },[productSize,productPrice,shippingCostPerKg])
  return (
    <div>
      {/* <button onClick={handleClick}>Calculate Price</button> */}
      <p>Total Price : {data}</p>
    </div>
  )
}

export default TotalPrice
