import React from 'react'

const ProductPrice = () => {
  return (
    <div className='shippingCostPerKg'>
      <label htmlFor="perKg">Shipping Cost Per KG</label>
      <input id='perKg' type="number" placeholder='Shipping Cost Per KG' />
    </div>
  )
}

export default ProductPrice
