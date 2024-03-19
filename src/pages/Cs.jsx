import React from "react";
import Card from "../components/Card";
const Cs = ({ datas }) => {
  return (
    <div className="container ">
      <div className="row gap-3">
        {/* Filtered and mapped the cards acoording to their category */}
        {datas
          .filter((element) => element.category === "cs")
          .map((data) => {
            return <Card data={data} key={data.id} />;
          })}
      </div>
    </div>
  );
};

export default Cs;
