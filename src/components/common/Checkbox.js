import React from "react";
import { taskStatus } from "../../constants/constants";

const Checkbox = ({ label, value, onChange,disable,api,modalControl }) => {
  const handleChangee = (e) => {
    modalControl(true);
    console.log(api);
    api();
  };
    return (
      <label className={'text-xl '+(disable === taskStatus.COMPLETED?'text-slate-500':'')}>
        <input className={'p-4 text-2xl mr-4'} type="checkbox" checked={value == taskStatus.COMPLETED} onChange={handleChangee} disabled={disable === taskStatus.COMPLETED}  />
        {label}
      </label>
    );
  };
  export default Checkbox;