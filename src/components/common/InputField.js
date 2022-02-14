import React  from "react";

const InputField = ({ value, name, placeholder, type, onChange,className }) => (

    <input
    className={"w-2/3 shadow appearance-none border rounded py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline "+className}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
);

export default InputField;