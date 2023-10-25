import React, { useState } from "react";
import "./pagination.css";
import PaginationItem from "./PaginationItem";

const range = (start, end) => {
    return [...Array(end).keys()].map((element) => element + start);
};

const Pagination = ({ total, limit }) => {
    const pagesCount = Math.ceil(total / limit);
    const pages = range(1, pagesCount);
    console.log("pagesCount", pagesCount);
    console.log("pages", pages);

    const [currentPage, setCurrentPage] = useState(1);
    console.log("currentPage", currentPage);

    const onChangePage = (newPage) => {
        console.log("coucou");
        console.log("newPage", newPage);
        // Gérer le changement de page en mettant à jour l'état currentPage.
        if (newPage >= 1 && newPage <= pagesCount) {
            setCurrentPage(newPage); // si je clique sur 2 currentpage passe a 2
            console.log("fonction currentPage", currentPage);
        }
    };

    return (
        <section className="paginateContainer">
            <ul className="pagination">
                {pages.map((page) => (
                    <PaginationItem
                        page={page}
                        key={page}
                        currentPage={currentPage}
                        onChangePage={onChangePage}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Pagination;
