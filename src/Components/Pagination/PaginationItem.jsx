import React from "react";
import classNames from "classnames";

const PaginationItem = ({ page, currentPage, onPageChange }) => {
    return;
    <li className="page-item" onClick={() => onPageChange(page)}>
        <span className="page-link">{page}</span>
    </li>;
};

export default PaginationItem;
