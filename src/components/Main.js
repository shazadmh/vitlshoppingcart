import React from 'react'
import Product from './Product'

export default function Main(props) {
  // use map to loop over products pass then via props to the product component
  const { products, onAdd } = props
  return (
    <main className="block">
      <h2>Products</h2>

      <div className="row">
        {products.map((product) => (
          <Product key={product.name} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  )
}
