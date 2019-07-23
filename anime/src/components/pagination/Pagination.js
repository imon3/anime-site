import React from "react";

const Pagination = props => {
  const { animePerPage, summerAnimeAmount, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(summerAnimeAmount / animePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map(number => {
          return (
            <li key={number}>
              <a onClick={() => paginate(number)} href="#">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
