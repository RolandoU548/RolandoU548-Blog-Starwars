import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./Card";

export const Vehicles = () => {
  const { store } = useContext(Context);
  const vehicles = store.vehicles;

  if (vehicles.length != 0) {
    return (
      <>
        {vehicles.map(vehicle => (
          <Card key={vehicle.uid} data={vehicle} object="vehicle"></Card>
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
