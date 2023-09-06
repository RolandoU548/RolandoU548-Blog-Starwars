import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const SpecificVehicle = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState();
  const [imagenUrl, setImagenUrl] = useState(
    `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`
  );

  useEffect(() => {
    const loadVehicle = async () => {
      try {
        const response = await fetch(
          `https://www.swapi.tech/api/vehicles/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setVehicle(data.result.properties);
      } catch (error) {
        console.log(error);
      }
    };
    loadVehicle();
  }, []);

  if (vehicle) {
    return (
      <div className="container pt-5">
        <Link
          to="/"
          className="text-decoration-none text-dark"
          style={{ fontSize: "1.5rem" }}>
          ←Back
        </Link>
        <div className="row">
          <div className="col-lg-8 col-12 text-center">
            <img
              className="rounded-3"
              src={imagenUrl}
              alt={vehicle.name}
              title={vehicle.name}
              onError={() => {
                setImagenUrl("http://via.placeholder.com/400x400");
              }}
            />
          </div>
          <div className="col-lg-4 col-12">
            <h1 className="text-center">{vehicle.name}</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              facilis deserunt quis assumenda consequuntur consequatur laborum
              harum veritatis delectus, officia nam voluptates sint eveniet
              officiis veniam quia quos vitae pariatur tenetur odit suscipit
              quam eos ab. Tenetur illo laborum perspiciatis exercitationem
              culpa ullam libero dolores, incidunt unde cumque. Molestias,
              architecto!
            </p>
          </div>
        </div>
        <hr className="text-danger" />
        <div className="d-flex justify-content-around flex-wrap text-danger">
          <div className="p-3 mb-4" style={{ maxWidth: "135px" }}>
            <h6>Class:</h6>
            {vehicle.vehicle_class}
          </div>
          <div className="p-3 mb-4" style={{ maxWidth: "170px" }}>
            <h6>Manufacturer:</h6>
            {vehicle.manufacturer}
          </div>
          <div className="p-3 mb-4">
            <h6>Cost in credits:</h6>
            {vehicle.cost_in_credits}
          </div>
          <div className="p-3 mb-4">
            <h6>Length:</h6>
            {vehicle.length}
          </div>
          <div className="p-3 mb-4">
            <h6>Crew:</h6>
            {vehicle.crew}
          </div>
          <div className="p-3 mb-4">
            <h6>Passengers:</h6>
            {vehicle.passengers}
          </div>
          <div className="p-3 mb-4">
            <h6>Max Speed:</h6>
            {vehicle.max_atmosphering_speed}
          </div>
          <div className="p-3 mb-4">
            <h6>Cargo Capacity:</h6>
            {vehicle.cargo_capacity}
          </div>
          <div className="p-3 mb-4">
            <h6>Consumables:</h6>
            {vehicle.consumables}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <div className="spinner-border" role="status"></div>
      <span className="ms-3">Loading...</span>
    </div>
  );
};
