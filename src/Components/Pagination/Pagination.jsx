import React, { useState } from "react";

import "./pagination.css";
import PaginationItem from "./PaginationItem";

// dans range on stock via ne callback une fonction qui retourne la copie du tableau
const range = (start, end) => {
    return [...Array(end).keys()].map((element) => element + start);
};

const goToPreviousPage = () => {
    onPageChange(currentPage - 1);
};

const goToNextPage = () => {
    onPageChange(currentPage + 1);
};

//ici on défragmente les props dans la call back
const Pagination = ({ currentPage, total, limit, onPageChange }) => {
    //ici on fait le calcul du nombre de page necessaire et j'utilise Math.ceil pour arrondir vers le haut le resultat du calcul que e stock dans la constante
    const pagesCount = Math.ceil(total / limit); // pagecount a 25 de 0 a 24 mais il faut commencer a 1 pour avoir
    /* console.log("range", range); */
    // pages : on lui dit dans pages tu executes la fonction range() créé au dessus du composant et on donne deux arguments 1 qui est le point de départ et pageCount = 25
    const pages = range(1, pagesCount);
    /* console.log("pages", pages);
    console.log("pagesCount", pagesCount); */

    return (
        <section className="paginateContainer">
            {/* au click sur previous il faut faire currentPage - 1*/}
            <button className="paginateButtons" onClick={goToPreviousPage}>
                Previous
            </button>

            {/*Entre les deux boutons il faut mapper sur la liste du nombre de page s*/}

            <ul className="pagination">
                {pages.map((page) => (
                    <PaginationItem
                        page={page}
                        key={page}
                        currentPage={currentPage}
                        onePageChange={onPageChange}
                    />
                ))}
            </ul>
            {/* au click sur next il faut faire currentPage + 1*/}
            <button className="paginateButtons" onClick={goToNextPage}>
                Next
            </button>
        </section>
    );
};

export default Pagination;
