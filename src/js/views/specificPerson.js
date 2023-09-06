import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const SpecificPerson = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const [imagenUrl, setImagenUrl] = useState(
    `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  );

  useEffect(() => {
    const loadPerson = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setCharacter(data.result.properties);
      } catch (error) {
        console.log(error);
      }
    };
    loadPerson();
  }, []);

  if (character) {
    return (
      <div className="container pt-5">
        <Link
          to="/"
          className="text-decoration-none text-dark"
          style={{ fontSize: "1.5rem" }}>
          ←Back
        </Link>
        <div className="row">
          <div className="col-lg-7 col-12 text-center">
            <img
              className="rounded-3"
              src={imagenUrl}
              alt={character.name}
              title={character.name}
              onError={() => {
                setImagenUrl("http://via.placeholder.com/400x400");
              }}
            />
          </div>
          <div className="col-lg-5 col-12">
            <h1 className="text-center">{character.name}</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate at ullam possimus odio! Iure, pariatur quibusdam
              repellat sed quos hic? Voluptas ad iusto ducimus, minus
              consequuntur atque eos reiciendis autem. Voluptas, a omnis
              doloribus suscipit sit quia dolorum dolore voluptatum quam
              cupiditate, aut esse vero, aliquam eaque ullam! Placeat impedit,
              possimus eius, quam nulla consequuntur blanditiis dolorem nihil
              illo sit quia, animi voluptatum cum necessitatibus ipsum fuga odio
              amet perspiciatis quo mollitia illum doloremque obcaecati.
              Sapiente accusamus reprehenderit voluptate repellendus atque eum
              reiciendis, officia saepe ratione, aspernatur ex facere nemo,
              excepturi aliquid velit? Id ipsa quia facilis laboriosam eveniet
              optio molestiae veniam ducimus nobis. Commodi, facilis sint! Hic
              adipisci similique facere ea perspiciatis a excepturi
              reprehenderit eveniet corporis dolor. Voluptatem, error magni.
              Facilis repellendus magni, temporibus ea aperiam sequi minus
              perspiciatis consequuntur provident velit ipsa maxime, dolor iusto
              nam ratione cupiditate obcaecati quisquam pariatur animi dolorem
              fuga odit odio architecto?
            </p>
          </div>
        </div>
        <hr className="text-danger" />
        <div className="d-flex justify-content-around flex-wrap text-danger">
          <div className="p-3 mb-4" style={{ width: "120px" }}>
            <h6>Height:</h6>
            {character.height}
          </div>
          <div className="p-3 mb-4" style={{ width: "120px" }}>
            <h6>Mass:</h6>
            {character.mass}
          </div>
          <div className="p-3 mb-4" style={{ width: "120px" }}>
            <h6>Hair Color:</h6>
            {character.hair_color}
          </div>
          <div className="p-3 mb-4" style={{ width: "120px" }}>
            <h6>Skin Color:</h6>
            {character.skin_color}
          </div>
          <div className="p-3 mb-4" style={{ width: "120px" }}>
            <h6>Eye Color:</h6>
            {character.eye_color}
          </div>
          <div className="p-3 mb-4" style={{ width: "120px" }}>
            <h6>Birth Year:</h6>
            {character.birth_year}
          </div>
          <div className="p-3 mb-4" style={{ width: "120px" }}>
            <h6>Gender:</h6>
            {character.gender}
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
