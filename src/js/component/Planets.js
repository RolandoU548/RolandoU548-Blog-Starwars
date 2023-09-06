import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./Card";

export const Planets = () => {
  const { store } = useContext(Context);
  const planets = store.planets;

  if (planets.length != 0) {
    return (
      <>
        {planets.map(planets => (
          <Card key={planets.uid} data={planets} object="planet"></Card>
        ))}
      </>
    );
  }

  return (
    <div className="d-flex justify-content-center w-100">
      <div className="spinner-border" role="status"></div>
      <span>Loading...</span>
    </div>
  );
};
