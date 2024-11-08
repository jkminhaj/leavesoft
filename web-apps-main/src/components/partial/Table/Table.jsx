import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";

function Table({ children }) {
  return (
    <table
      id="memberListGrid"
      className="table display no-wrap dataTable no-footer space-y-0  mt-5 "
    >
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;
