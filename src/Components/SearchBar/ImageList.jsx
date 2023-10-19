import React from "react";

function ImageList({ images, onSelectImage }) {
    return (
        <div className="imageContainer">
            {images.map((image, index) => (
                <div key={index} className="image-item">
                    <img
                        className="searchImg"
                        src={image.strMealThumb}
                        alt={image.strMeal}
                        onClick={() => onSelectImage(image)}
                    />
                </div>
            ))}
        </div>
    );
}

export default ImageList;
