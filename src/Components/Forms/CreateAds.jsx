import React from "react";

import { useState, useEffect } from "react";

import "./form.css";

const CreateAds = () => {
    // STATES

    //USEEFFECT

    return (
        <>
            <div className="formHeader">
                <h2>Create</h2>
            </div>

            <div className="formContainer flex">
                <form className="Adsform grid" name="createForm">
                    <div className="inputDiv">
                        <label htmlFor="Title">Title</label>
                        <div className="input flex">
                            <input
                                type="text"
                                id="Title"
                                placeholder="Enter Title"
                                onChange={(event) => {
                                    console.log("event", event);
                                    console.log("event", event.target.value);
                                    /* setLoginUserName(event.target.value); */
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="price">Price</label>
                        <div className="input flex">
                            <input
                                type="number"
                                id="price"
                                placeholder="Enter Your Price"
                                onChange={(e) => {
                                    console.log(e);
                                    console.log(
                                        "e.target.value",
                                        e.target.value
                                    );
                                    /* setLoginPassword(e.target.value); */
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="part">Nombre de parts</label>
                        <div className="input flex">
                            <input
                                type="number"
                                id="number"
                                placeholder="Enter quantity"
                                onChange={(e) => {
                                    console.log(e);
                                    console.log(
                                        "e.target.value",
                                        e.target.value
                                    );
                                    /* setLoginPassword(e.target.value); */
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label for="imageUpload">
                            Sélectionnez une image :
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            name="image"
                            accept="image/*"
                        ></input>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="price">Descriptions</label>
                        <textarea
                            className="
                        input flex"
                            type="text"
                            id="description"
                            name="description"
                            rows="4"
                            cols="50"
                            placeholder="Enter description"
                            onChange={(e) => {
                                console.log(e);
                                console.log("e.target.value", e.target.value);
                                /* setLoginPassword(e.target.value); */
                            }}
                        >
                            {" "}
                        </textarea>

                        {/* <div className="input flex">
                            <input
                                type="text "
                                id="price"
                                placeholder="Enter description"
                                onChange={(e) => {
                                    console.log(e);
                                    console.log(
                                        "e.target.value",
                                        e.target.value
                                    );
                                    /* setLoginPassword(e.target.value); 
                                }}
                            />
                        </div> */}
                    </div>
                    <div className="msg">
                        Veuillez saisir les informations requises.
                    </div>
                    <button
                        type="submit"
                        className="btn flex"
                        onClick={console.log("coucou")}
                    >
                        <span>SAVE</span>
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateAds;
