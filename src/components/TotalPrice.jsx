import React, { useState } from 'react'

const TotalPrice = ({productSize,productPrice,shippingCostPerKg}) => {
  const [data,setData] = useState(0)
  const [isClick,setIsClick] = useState(false)
  const handleClick = () => {
    let singleProductShippingCost = shippingCostPerKg / productSize;
    let result = productPrice + singleProductShippingCost;
    setData(result)
    setIsClick(true)
  }

  return (
    <div>
      <button onClick={handleClick}>Calculate Price</button>
      {isClick ? <p>Total Price : {data}</p> : null}
    </div>
  )
}

export default TotalPrice
