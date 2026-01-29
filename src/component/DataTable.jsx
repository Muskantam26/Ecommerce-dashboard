import React, { useState } from 'react';
import {
  PencilSquareIcon,
  TrashIcon,
  ArrowUturnLeftIcon,
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';


const DataTable = ({ columns, data }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const totalEntries = data.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentRows = data.slice(indexOfFirstEntry, indexOfLastEntry);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="w-full bg-(--card-bg) rounded-xl  shadow-2xl  ">

      {/* ---------- HEADER ---------- */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
        <div className="flex items-center gap-2">
          <select
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-(--bg-border-color) rounded-lg px-3 py-2 text-sm bg-(--bg-card)"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select> 
          <span className="text-sm text-(--text-muted) font-normal">
            Entries Per Page
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-2 mr-2">
            <button className="p-2 bg-(--btn-color-bg) text-(--bs-red) rounded-lg cursor-pointer hover:bg-(--bs-red) hover:text-(--text-invert)">
              <TrashIcon className="h-6 w-10" />
            </button>
            <button className="p-2 bg-[#d1f3f9] text-(--bs-cyan) rounded-lg cursor-pointer hover:bg-(--bs-indigo) hover:text-(--text-invert)">
              <ArrowUturnLeftIcon className="h-6 w-10" />
            </button>
            <button className="p-2 bg-[#ffebd6] text-(--bs-yellow) rounded-lg cursor-pointer hover:bg-(--bs-orange) hover:text-(--text-invert)">
              <ArrowPathIcon className="h-6 w-10" />
            </button>
          </div>

          <input
            type="text"
            placeholder="Search..."
      
            className="pl-4 pr-4 py-2 border border-(--bg-border-color) rounded-lg text-sm w-48 md:w-64"
          />
        </div>
      </div>

      {/* ---------- TABLE ---------- */}
      <div className="border-t  border-(--bg-border-color) w-full overflow-x-auto ">
  <table className="min-w-max w-full divide-y divide-(--bg-border-color) ">

          <thead className="bg-(--card-bg) text-nowrap">
            <tr>
              <th className="px-6 py-4 w-10">
                <input type="checkbox" />
              </th>

              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-4 text-left text-xs font-bold text-(--text-main) uppercase cursor-pointer"
                >
                  {col.label}
                </th>
              ))}

            

            </tr>
          </thead>

          <tbody className="bg-(--card-bg)  divide-y divide-(--bg-border-color) ">
            
            {currentRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>

                {columns.map((col) => (
            <td key={col.key} className="px-6 py-4 text-sm text-(--text-main)">
                {col.render ? col.render(row) : row[col.key]}
                         </td>
                       ))}

              
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------- PAGINATION ---------- */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-(--bg-border-color) mt-10">
        <div className="text-sm text-(--text-main)">
          Showing {totalEntries === 0 ? 0 : indexOfFirstEntry + 1} to{' '}
          {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 border rounded-lg"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`w-9 h-9 rounded-lg font-bold cursor-pointer ${
                currentPage === i + 1
                  ? 'bg-(--primary-hover) text-(--text-invert)'
                  : 'text-(--text-muted)'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 border rounded-lg"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
        </div>
    </div>
  );
};
export default DataTable;


