import React from "react";
import Card from "../components/Card";

const Ds = ({ datas }) => {
  return (
    <div className="container">
      <div className="row gap-3">
        {/* Filtered and mapped the cards acoording to their category */}
        {datas
          .filter((element) => element.category === "ds")
          .map((data) => {
            return <Card data={data} key={data.id} />;
          })}
      </div>
    </div>
  );
};

export default Ds;
