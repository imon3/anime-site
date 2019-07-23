import React from "react";
import "./pagination.scss";

const Pagination = props => {
  const { animePerPage, summerAnimeAmount, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(summerAnimeAmount / animePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="page-number-ul">
        {pageNumbers.map(number => {
          return (
            <li className="page-number" key={number}>
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
