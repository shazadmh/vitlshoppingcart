import React from 'react'

const Nutrients = (props) => {
  return (
    <>
      <div>{props.id}</div>
      <div>Amount: {props.vitaminAmount}</div>
    </>
  )
}

export default Nutrients
