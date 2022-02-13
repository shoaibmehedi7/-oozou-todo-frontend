import React from 'react'

function ButtonCustom(props) {
  return (
    <button
    variant="contained"
    color="primary"
    onClick={props.onClick}
  >
    {props.title}
  </button>
  )
}

export default ButtonCustom