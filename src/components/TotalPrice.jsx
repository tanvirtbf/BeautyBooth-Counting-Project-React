import React, { useState } from 'react'

const TotalPrice = ({productSize,productPrice,shippingCostPerKg}) => {
  const [data,setData] = useState(0)
  const handleClick = () => {
    let singleProductShippingCost = shippingCostPerKg / productSize;
    let result = productPrice + singleProductShippingCost;
    setData(result)
  }
  return (
    <div>
      <button onClick={handleClick}>Calculate Price</button>
      <p>Total Price : {data}</p>
    </div>
  )
}

export default TotalPrice
