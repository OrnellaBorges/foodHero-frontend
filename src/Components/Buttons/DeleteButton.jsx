import React from "react";

import "./button.css";

const DeleteButton = ({ text }) => {
    //suppression d'une annonce
    const onClickDeleteAd = (id) => {
        deleteOneAd(id)
            .then((res) => {
                console.log(res);
                /* if(res.status === 200){
            //displayBeers() // ???? 
            .then((response)=>{
                if(response.status === 200){
                    dispatch(loadBeers(response.result))
                }
            })
            .catch(err=>console.log(err))
        } */
            })
            .catch((err) => console.log(err));
    };

    return (
        <button className="btn" type="button" onClick={onClickDeleteAd}>
            {text}
        </button>
    );
};

export default DeleteButton;
