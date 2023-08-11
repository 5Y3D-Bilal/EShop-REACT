import React from "react";

function Card(props) {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="flex justify-content-evenly text-center">
          <div className="card p-4 border">
            <div className="card-content">
              <div className="card-title">{props.title}</div>
              <div className="card-price">{props.price}</div>
              <div className="card-rates pb-2 flex justify-content-center">
                {/* ⭐⭐⭐⭐ */}
                {props.star}
              </div>
            </div>
            <img src={props.image} />

            <div className="card-content">
              <button className="card-button">Add to Cart</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
