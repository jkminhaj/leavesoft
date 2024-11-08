import React from "react";

function SelectInput({ children, inputClassName, ...rest }) {
  return (
    <div className="col-span-2">
      <select
        className={`focus:border-yellow-400 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputClassName}`}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}

export default SelectInput;
