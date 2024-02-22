// Pagination.js
import React from 'react';

const Pagination = ({ onNextPage }) => {
  return (
    <div className="pagination">
      <button onClick={onNextPage}>Next Page</button>
    </div>
  );
};

export default Pagination;
