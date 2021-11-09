import React, { useState, useEffect } from 'react'
import './App.css'
import { getProducts } from './services/productService'
import Main from './components/Main'
import Header from './components/Header'
import Basket from './components/Basket'

function App() {
  //Setting the useState
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [amountAllowed, setamountAllowed] = useState([])

  //setting the useEffect fetch the data fromt /services/productService api

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.products)
        setamountAllowed(response.config.tolerableUpperLimits)
      })
      .catch((e) => setError(e))
  }, [])

  // Make sure only loads once [] in the useEffect.
  //function for the add products
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.name === product.name)

    if (exist) {
      cartItems.forEach((item) => {
        if (item.qty >= 1) {
          item.nutrients.forEach((nutrient) => {
            const addunits = nutrient.amount * (item.qty + 1)

            const amountAllowedFilter = amountAllowed.filter(
              (a) => a.id == nutrient.id,
            )
            amountAllowedFilter.forEach((a) => {
              if (addunits >= a.amount) {
                // alert(`Over the limit`)
                // console.log(`Over the limit`)
                document.getElementById('exceededLimit').style.display = 'block'
              }
            })
          })
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.name === product.name ? { ...exist, qty: exist.qty + 1 } : x,
            ),
          )
        }
      })
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])

      document.getElementById('exceededLimit').style.display = 'none'
    }
  }
  //function for the onRemove products
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.name === product.name)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.name !== product.name))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.name === product.name ? { ...exist, qty: exist.qty - 1 } : x,
        ),
      )
    }
  }

  return (
    <div className="container-fluid">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <div className="col-sm-9">
          <Main products={products} onAdd={onAdd}></Main>
        </div>
        <div className="col-sm-3">
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
        </div>
      </div>
    </div>
  )
}

export default App
