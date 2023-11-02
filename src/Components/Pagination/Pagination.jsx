import React, { useState } from "react";
import "./pagination.css";
import PaginationItem from "./PaginationItem";

const range = (start, end) => {
    return [...Array(end).keys()].map((element) => element + start);
};

const Pagination = ({ total, limit, onChangePage }) => {
    const pagesCount = Math.ceil(total / limit);
    const pages = range(1, pagesCount);
    const [currentPage, setCurrentPage] = useState(1);

    const onClickPage = (newPage) => {
        // Gérer le changement de page en mettant à jour l'état currentPage.
        if (newPage >= 1 && newPage <= pagesCount) {
            setCurrentPage(newPage); // si je clique sur 2 currentpage passe a 2
        }
        onChangePage(newPage);
    };

    return (
        <section className="paginateContainer">
            <ul className="pagination">
                {pages.map((page) => (
                    <PaginationItem
                        page={page}
                        key={page}
                        currentPage={currentPage}
                        onChangePage={onClickPage}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Pagination;
