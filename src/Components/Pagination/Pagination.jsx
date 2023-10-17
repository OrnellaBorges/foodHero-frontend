import React, { useState } from "react";

//ici on défragmente les props

const Pagination = ({ currentPage, total, limit, onChangePage }) => {
    const nbrPage = 55;

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
