import React from "react";
import { useDispatch } from "react-redux";

const Checkbox = ({ label, value, onChange,disable,api }) => {

  const [checked, setChecked] = React.useState(value);
  const handleChangee = (e) => {
    setChecked(!checked);
    console.log(api);
    api();
  };
  const apiCall = () => {
  };
    return (
      <label className={'text-xl '+(disable?'text-slate-500':'')}>
        <input className={'p-4 text-2xl mr-4'} size={10} type="checkbox" checked={checked} onChange={handleChangee} disabled={disable}  />
        {label}
      </label>
    );
  };
  export default Checkbox;