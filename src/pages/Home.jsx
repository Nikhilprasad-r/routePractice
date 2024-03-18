import React from "react";
import Card from "../components/Card";

const Home = ({ datas }) => {
  return (
    <div className="container ">
      <div className="row gap-3">
        {datas.map((data) => {
          return <Card data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
