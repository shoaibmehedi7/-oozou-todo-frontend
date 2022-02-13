import React from 'react'

function ButtonCustom(props) {
  return (
    <button
    onClick={props.onSubmit}
    className={"w-1/3 bg-[#14B8A6] hover:bg-blue-700 text-white font-bold  py-2 rounded "+props.className}
  >
    {props.title?props.title:"Submit"}
  </button>
  )
}

export default ButtonCustom