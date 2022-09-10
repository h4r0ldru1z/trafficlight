import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="Semaforo">
      <div className="rojo">rojo</div>
      <div className="amarillo">amarillo</div>
      <div className="verde">verde</div>
    </div>
  );
};

export default Home;
