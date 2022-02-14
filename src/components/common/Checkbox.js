import React from "react";

const Checkbox = ({ label, value, onChange,disable }) => {
  const [checked, setChecked] = React.useState(value);
  const handleChangee = () => {
    setChecked(!checked);
  };
    return (
      <label className='text-3xl'>
        {/* <button className="">hello</button> */}
        <input className='p-4 text-2xl mr-4' size={10} type="checkbox" checked={checked} onChange={handleChangee} disabled={disable}  />
        {label}
      </label>
    );
  };
  export default Checkbox;