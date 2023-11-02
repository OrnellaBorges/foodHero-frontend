import React from "react";
import classNames from "classnames";

const PaginationItem = ({ page, currentPage, onChangePage }) => {
    const liClasses = classNames({
        "page-item": true,
        active: page === currentPage,
    });

    return (
        <li className={liClasses} onClick={() => onChangePage(page)}>
            <span className="page-link">{page}</span>
        </li>
    );
};

export default PaginationItem;
