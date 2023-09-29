import React from "react";

const CardComponent = () => {
  return (
    <div className="card">
        <img className="card-img-top" src="img/photos/unsplash-2.jpg" alt="Unsplash" />
        <div className="card-header">
            <h5 className="card-title mb-0">Card with image and button</h5>
        </div>
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    );
};

export default CardComponent;