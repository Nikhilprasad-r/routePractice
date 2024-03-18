import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className="card col-md-4 col-sm-1 border-0 shadow-sm position-relative"
      style={{ width: "18rem" }}
    >
      <img className="card-img-top" src={data.img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-decoration-none text-dark fs-5 fw-semibold">
          {data.title}
        </h5>
        <p className="card-author mt-0 mb-0">{data.author}</p>
        <div className="mt-2 d-flex flex-row flex-nowrap justify-content-between">
          <p className="mb-0 card-text">{data.date}</p>
          <p className="mb-0 card-text">{data.time}min read</p>
        </div>
      </div>
      <div className="position-absolute" style={{ right: "1rem", top: "1rem" }}>
        <div className="card-views d-flex px-2 py-1 align-items-center bg-white rounded-pill">
          <img
            loading="lazy"
            src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/icons/eye.svg"
            height="auto"
            width="auto"
            alt="eye-icon"
          />

          <p className="m-0">{data.views}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
