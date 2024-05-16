import React from 'react'

const ProductSize = () => {
  return (
    <div className='shippingCostPerKg'>
      <label htmlFor="productSize">Product Size </label>
      <input id='productSize' type="number" placeholder='Shipping Cost Per KG' />
      <select name="cars" id="cars" className='select'>
        <option value="volvo">GM</option>
        <option value="saab">ML</option>
      </select>
    </div>
  )
}

export default ProductSize
