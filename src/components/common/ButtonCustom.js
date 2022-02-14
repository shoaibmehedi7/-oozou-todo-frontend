import React from 'react'

function ButtonCustom(props) {
  return (
    <button
    onClick={props.onSubmit}
    className={" bg-[#14B8A6] hover:bg-blue-700 text-white py-2 rounded "+props.className}
  >
    {props.title?props.title:"Submit"}
  </button>
  )
}

export default ButtonCustom