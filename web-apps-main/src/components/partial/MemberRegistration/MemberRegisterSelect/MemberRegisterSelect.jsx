import React from "react";

function MemberRegisterSelect({
  label,
  type,
  children,
  register,
  error,
  name,
  isRequired = false,
  onChange = () => {},
  ...res
}) {
  return (
    <div className={"w-full space-y-2 pt-2"}>
      <label htmlFor={label} className="capitalize font-bold text-[0.9rem]">
        {label}
      </label>
      <select
        type={type}
        id={label}
        className={`focus:border-yellow-400 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline`}
        {...register(name, { required: isRequired, onChange: onChange })}
        {...res}
      >
        {children}
      </select>
      {error?.[name]?.message && (
        <p className="text-red-500 pt-2 pl-2">{error?.[name]?.message}</p>
      )}
    </div>
  );
}

export default MemberRegisterSelect;
