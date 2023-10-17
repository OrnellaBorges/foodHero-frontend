import React, { useState } from "react";

//ici on défragmente les props

const Pagination = ({ currentPage, total, limit, onChangePage }) => {
    //ici on fait le calcul du nombre de page necessaire et j'utilise Math.ceil pour arrondir vers le haut le resultat du calcul que e stock dans la constante
    const pagesCount = Math.ceil(total / limit);
    console.log("pagesCount", pagesCount);

    return (
        <>
            <div className="paginateContainer">
                {/* au click sur previous il faut faire currentPage - 1*/}
                <button className="paginateButtons">Previous</button>

                {/*Entre les deux boutons il faut mapper sur la liste du nombre de page s*/}

                {/* au click sur next il faut faire currentPage + 1*/}
                <button className="paginateButtons">Next</button>
            </div>
        </>
    );
};

export default Pagination;
