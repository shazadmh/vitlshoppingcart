import React from 'react'

export default function Basket(props) {
  // Math cal for the basket
  const { cartItems, onAdd, onRemove } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const taxPrice = itemsPrice * 0.14
  const shippingPrice = itemsPrice > 2000 ? 0 : 20
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  return (
    <aside className="block">
      <div className="col-sm-12">
        <div id="exceededLimit" className="exceededLimit">
          Exceeded limit on tolerable upper limits!
        </div>
      </div>
      <h2>Cart Items</h2>

      <div className="col-sm-12">
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-5">
              {item.name}
              {item.nutrients.map((x, index) => (
                <div key={index} className="spaceBasket">
                  Amount: {x.amount}
                </div>
              ))}
            </div>
            <div className="col-3">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-4 text-right">
              Qty {item.qty} x £{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-6">Items Price</div>
              <div className="col-6 text-right">£{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-6">Tax Price</div>
              <div className="col-6 text-right">£{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-6">Shipping Price</div>
              <div className="col-6 text-right">
                £{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <strong>Total Price</strong>
              </div>
              <div className="col-6 text-right">
                <strong>£{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
