import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Pagination = ({ totalData, showItemsPerPageSelector = true }) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const paginatedData = totalData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const numberOfPages = Math.ceil(totalData.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value, 10);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const ellipsis = <span className="px-3 py-2 text-gray-500">...</span>;

    if (numberOfPages <= 5) {
      // If there are 5 or fewer pages, show them all
      for (let i = 0; i < numberOfPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`px-3 join-item text-sm py-2 focus:outline-none transition-colors duration-300 ease-in-out ${
              currentPage === i
                ? "bg-gray-700 rounded-xl text-white hover:bg-gray-700"
                : "bg-transparent hover:bg-gray-200"
            }`}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </button>
        );
      }
    } else {
      // More than 5 pages, show partial page numbers with ellipsis
      if (currentPage <= 2) {
        // Show first 3 pages
        for (let i = 0; i < 3; i++) {
          pageNumbers.push(
            <button
              key={i}
              className={`px-3 join-item text-sm py-2 focus:outline-none transition-colors duration-300 ease-in-out ${
                currentPage === i
                  ? "bg-gray-700 rounded-xl text-white hover:bg-gray-700"
                  : "bg-transparent hover:bg-gray-200"
              }`}
              onClick={() => setCurrentPage(i)}
            >
              {i + 1}
            </button>
          );
        }
        pageNumbers.push(ellipsis);
        pageNumbers.push(
          <button
            key={numberOfPages - 1}
            className={`px-3 join-item text-sm py-2 focus:outline-none transition-colors duration-300 ease-in-out ${
              currentPage === numberOfPages - 1
                ? "bg-gray-700 rounded-xl text-white hover:bg-gray-700"
                : "bg-transparent hover:bg-gray-200"
            }`}
            onClick={() => setCurrentPage(numberOfPages - 1)}
          >
            {numberOfPages}
          </button>
        );
      } else if (currentPage >= numberOfPages - 3) {
        // Show last 3 pages
        pageNumbers.push(
          <button
            key={0}
            className={`px-3 join-item text-sm py-2 focus:outline-none transition-colors duration-300 ease-in-out ${
              currentPage === 0
                ? "bg-gray-700 rounded-xl text-white hover:bg-gray-700"
                : "bg-transparent hover:bg-gray-200"
            }`}
            onClick={() => setCurrentPage(0)}
          >
            1
          </button>
        );
        pageNumbers.push(ellipsis);
        for (let i = numberOfPages - 3; i < numberOfPages; i++) {
          pageNumbers.push(
            <button
              key={i}
              className={`px-3 join-item text-sm py-2 focus:outline-none transition-colors duration-300 ease-in-out ${
                currentPage === i
                  ? "bg-gray-700 rounded-xl text-white hover:bg-gray-700"
                  : "bg-transparent hover:bg-gray-200"
              }`}
              onClick={() => setCurrentPage(i)}
            >
              {i + 1}
            </button>
          );
        }
      } else {
        // Show middle pages with ellipsis on both sides
        pageNumbers.push(
          <button
            key={0}
            className={`px-3 join-item text-sm py-2 focus:outline-none transition-colors duration-300 ease-in-out ${
              currentPage === 0
                ? "bg-gray-700 rounded-xl text-white hover:bg-gray-700"
                : "bg-transparent hover:bg-gray-200"
            }`}
            onClick={() => setCurrentPage(0)}
          >
            1
          </button>
        );
        pageNumbers.push(ellipsis);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <button
              key={i}
              className={`px-3 join-item text-sm py-2 focus:outline-none transition-colors duration-300 ease-in-out ${
                currentPage === i
                  ? "bg-gray-700 rounded-xl text-white hover:bg-gray-700"
                  : "bg-transparent hover:bg-gray-200"
              }`}
              onClick={() => setCurrentPage(i)}
            >
              {i + 1}
            </button>
          );
        }
        pageNumbers.push(ellipsis);
        pageNumbers.push(
          <button
            key={numberOfPages - 1}
            className={`px-3 join-item text-sm py-2 focus:outline-none transition-colors duration-300 ease-in-out ${
              currentPage === numberOfPages - 1
                ? "bg-gray-700 rounded-xl text-white hover:bg-gray-700"
                : "bg-transparent hover:bg-gray-200"
            }`}
            onClick={() => setCurrentPage(numberOfPages - 1)}
          >
            {numberOfPages}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  const paginationControls = (
    <div className="flex mt-7  items-center justify-between">
      {/* Pagination Controls */}
      <div className="flex justify-end">
        <div className="m-2 shadow rounded-lg max-w-min flex">
          <button
            className="join-item px-3 py-2 text-white rounded focus:outline-none hover:bg-gray-200"
            onClick={handlePrevPage}
          >
            <span className="text-black">
              <MdNavigateBefore />
            </span>
          </button>
          {pageNumbers.map((_, ind) => (
            <button
              className={`px-3 join-item text-sm py-2 focus:outline-none transition-colors duration-300 ease-in-out ${
                currentPage === ind
                  ? "bg-gray-700 rounded-xl text-white hover:bg-gray-700"
                  : "bg-transparent hover:bg-gray-200"
              }`}
              onClick={() => setCurrentPage(ind)}
              key={ind}
            >
              {ind + 1}
            </button>
          ))}
          <button
            className="px-3 py-2 text-white join-item rounded focus:outline-none hover:bg-gray-200"
            onClick={handleNextPage}
          >
            <span className="text-black">
              <MdNavigateNext />
            </span>
          </button>
        </div>
      </div>

      {/* Pagination Controls
            <div className='flex justify-end'>
                <NextPagination
                    color="warning"
                    isCompact
                    showControls
                    total={numberOfPages}
                    initialPage={currentPage}
                    onPageChange={handlePageChange}
                    className='text-white'
                />
            </div> */}

      {/* Items Per Page Selector */}
      {showItemsPerPageSelector && (
        <div className="flex justify-between items-center m-2">
          <label className="flex items-center text-default-400 text-lg">
            Items per page:
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPage}
              title="items per page"
              className="bg-transparent outline-none text-default-400 text-lg"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="50">50</option>
            </select>
          </label>
        </div>
      )}
      {/* Previous/Next Buttons */}
      <div>
        <div className="flex gap-2">
          <button
            onClick={handlePrevPage}
            className="text-xs bg-gray-100 px-4 rounded-md py-2 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="text-xs bg-gray-100 px-4 rounded-md py-2 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  return {
    paginatedData,
    paginationControls,
    itemsPerPage,
    handleItemsPerPage,
  };
};

export default Pagination;
