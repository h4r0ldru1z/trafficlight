import React, { useState } from "react";

const Home = () => {
  const [brillo, setBrillo] = useState("");

  return (
    <div className="semaforo">
      <div
        className={brillo === "rojo" ? "brillo rojo" : "rojo"}
        onClick={() => {
          setBrillo("rojo");
        }}
      ></div>
      <div
        className={brillo === "amarillo" ? "brillo amarillo" : "amarillo"}
        onClick={() => {
          setBrillo("amarillo");
        }}
      ></div>
      <div
        className={brillo === "verde" ? "brillo verde" : "verde"}
        onClick={() => {
          setBrillo("verde");
        }}
      ></div>
    </div>
  );
};

export default Home;
