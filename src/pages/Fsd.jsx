import React from "react";
import Card from "../components/Card";
const Fsd = ({ datas }) => {
  return (
    <div className="container ">
      <div className="row gap-3">
        {datas
          .filter((element) => element.category === "fsd")
          .map((data) => {
            return <Card data={data} key={data.id} />;
          })}
      </div>
    </div>
  );
};

export default Fsd;
