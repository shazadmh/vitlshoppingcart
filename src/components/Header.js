import React from 'react'

export default function Header(props) {
  return (
    <>
      <header className="block row center">
        <div className="col-sm-10">
          <img
            src="https://static.vitl.com/images/logo/vitl_logo.svg"
            alt="vitl shopping cart"
          />
          <h1>Shopping Cart</h1>
        </div>

        <div className="col-sm-2">
          {props.countCartItems ? (
            <>
              Cart <button className="badge">{props.countCartItems}</button>
            </>
          ) : (
            ''
          )}
        </div>
      </header>
    </>
  )
}
