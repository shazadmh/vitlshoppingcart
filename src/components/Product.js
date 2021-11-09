import React from 'react'
import Nutrients from './Nutrients'

export default function Product(props) {
  // pass in the props product list and onAdd prop
  const { product, onAdd } = props
  return (
    <div className="col-sm-4">
      <div className="productMargin">
        <h3>{product.name}</h3>
        <div>£{product.price}</div>

        <div className="row">
          {product.nutrients.map((nutrient) => (
            <Nutrients
              key={nutrient.id}
              id={nutrient.id}
              vitaminAmount={nutrient.amount}
            ></Nutrients>
          ))}
        </div>

        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  )
}
