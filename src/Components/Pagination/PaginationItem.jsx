import React from "react";
import classNames from "classnames";

const PaginationItem = ({ page, currentPage, onPageChange }) => {
    const liClasses = classNames({
        "page-item": true,
        active: page === currentPage,
        /* ça evite de faire `page-item ${page === currentPage ? 'active' : ''}` */
    });

    return (
        <li className={liClasses} onClick={() => onPageChange(page)}>
            <span className="page-link">{page}</span>
        </li>
    );
};

export default PaginationItem;
