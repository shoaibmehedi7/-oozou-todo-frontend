import React from "react";
import { useDispatch } from "react-redux";
import { taskStatus } from "../../constants/constants";

const Checkbox = ({ label, value, onChange,disable,api }) => {

  // const [checked, setChecked] = React.useState(value === taskStatus.COMPLETED);
  const handleChangee = (e) => {
    // setChecked(!checked);
    console.log(api);
    api();
  };
    return (
      <label className={'text-xl '+(disable === taskStatus.COMPLETED?'text-slate-500':'')}>
        <input className={'p-4 text-2xl mr-4'} type="checkbox" checked={value === taskStatus.COMPLETED} onChange={handleChangee} disabled={disable === taskStatus.COMPLETED}  />
        {label}
      </label>
    );
  };
  export default Checkbox;