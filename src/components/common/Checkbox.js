import React from "react";

const Checkbox = ({ label, value, onChange,disable }) => {
  const [checked, setChecked] = React.useState(value);
  const handleChangee = () => {
    setChecked(!checked);
  };
    return (
      <label className="">
        <input className="" type="checkbox" checked={checked} onChange={handleChangee} disabled={disable}  />
        {label}
      </label>
    );
  };
  export default Checkbox;