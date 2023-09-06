import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const SpecificPlanet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState();
  const [imagenUrl, setImagenUrl] = useState(
    `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
  );

  useEffect(() => {
    const loadPlanet = async () => {
      try {
        const response = await fetch(
          `https://www.swapi.tech/api/planets/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setPlanet(data.result.properties);
      } catch (error) {
        console.log(error);
      }
    };
    loadPlanet();
  }, []);

  if (planet) {
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
              alt={planet.name}
              title={planet.name}
              onError={() => {
                setImagenUrl("http://via.placeholder.com/400x400");
              }}
            />
          </div>
          <div className="col-lg-4 col-12">
            <h1 className="text-center">{planet.name}</h1>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae quaerat impedit libero cum quas aliquam dolore tempora
              laborum tenetur consectetur accusamus, molestias quidem quae
              delectus laboriosam vero incidunt! Dolor perspiciatis doloribus
              ratione odit distinctio minima nam hic eos exercitationem ducimus,
              ipsa commodi itaque ullam laborum recusandae beatae temporibus in
              cupiditate excepturi, mollitia amet voluptatem autem. Id unde ut
              ipsam distinctio aspernatur magnam alias suscipit esse labore
              provident ab numquam, debitis quasi eos rem hic corporis
              repudiandae corrupti ipsa ducimus facilis dolorem beatae aliquid.
            </p>
          </div>
        </div>
        <hr className="text-danger" />
        <div className="d-flex justify-content-around flex-wrap text-danger">
          <div className="p-3 mb-4">
            <h6>Diameter:</h6>
            {planet.diameter}
          </div>
          <div className="p-3 mb-4">
            <h6>Rotation Period:</h6>
            {planet.rotation_period}
          </div>
          <div className="p-3 mb-4">
            <h6>Orbital Period:</h6>
            {planet.orbital_period}
          </div>
          <div className="p-3 mb-4" style={{ maxWidth: "200px" }}>
            <h6>Gravity:</h6>
            {planet.gravity}
          </div>
          <div className="p-3 mb-4">
            <h6>Population:</h6>
            {planet.population}
          </div>
          <div className="p-3 mb-4">
            <h6>Climate:</h6>
            {planet.climate}
          </div>
          <div className="p-3 mb-4" style={{ maxWidth: "200px" }}>
            <h6>Terrain:</h6>
            {planet.terrain}
          </div>
          <div className="p-3 mb-4">
            <h6>Surface Water:</h6>
            {planet.surface_water}
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
