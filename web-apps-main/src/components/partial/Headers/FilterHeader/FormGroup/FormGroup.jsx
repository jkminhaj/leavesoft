import React from "react";
import { CiSearch } from "react-icons/ci";
function FormGroup({
  colSpan,
  placeholder,
  type,
  maxLength,
  setState,
  inputClassName,
  ...rest
}) {
  const onSubmit = async (e) => {
    e.preventDefault();
    const inputValue = e.target.search.value;
    setState(inputValue);
  };
  return (
    <div className={`col-span-${colSpan}`}>
      <form className="relative" onSubmit={onSubmit}>
        <input
          id=""
          name={"search"}
          type={type}
          placeholder={placeholder}
          className={`focus:border-yellow-400 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm ${inputClassName}`}
          
          {...rest}
        />
        {/* <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            id="SearchMemberIdButton"
            type="submit"
            className="inline-flex items-center justify-center p-2 text-gray-600 bg-white  border border-gray-300  shadow-sm hover:bg-gray-300"
            aria-label="Search"
          >
            <CiSearch />
          </button>
        </div> */}
      </form>
    </div>
  );
}

export default FormGroup;
