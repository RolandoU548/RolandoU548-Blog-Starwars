import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = ({ data, object }) => {
  const { store, actions } = useContext(Context);
  let [imagenUrl, setImagenUrl] = useState();
  let linkUrl;

  let existencia = false;
  for (const favorite of store.favorites) {
    if (Object.values(favorite).includes(data.name)) {
      existencia = true;
    }
  }

  switch (object) {
    case "person":
      [imagenUrl, setImagenUrl] = useState(
        `https://starwars-visualguide.com/assets/img/characters/${data.uid}.jpg`
      );
      linkUrl = `/characters/${data.uid}`;
      break;
    case "vehicle":
      [imagenUrl, setImagenUrl] = useState(
        `https://starwars-visualguide.com/assets/img/vehicles/${data.uid}.jpg`
      );
      linkUrl = `/vehicles/${data.uid}`;
      break;
    case "planet":
      [imagenUrl, setImagenUrl] = useState(
        `https://starwars-visualguide.com/assets/img/planets/${data.uid}.jpg`
      );
      linkUrl = `/planets/${data.uid}`;
      break;
  }

  return (
    <div className="m-2">
      <img
        src={imagenUrl}
        className="card-img-top"
        alt={object}
        title={data.name}
        onError={() => {
          setImagenUrl("http://via.placeholder.com/400x400");
        }}
        style={{ width: "235px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">
          <b>Description</b>: A {object} within the Star Wars universe
        </p>
        <div className="d-flex justify-content-between">
          <Link
            to={linkUrl}
            className="btn btn-light text-primary border-primary">
            Learn more!
          </Link>
          <button
            className="border-warning fs-5 btn text-warning"
            onClick={() => {
              !existencia
                ? actions.addFavorite(data, object)
                : actions.removeFavorite(data.name);
            }}>
            {existencia ? "★" : "☆"}
          </button>
        </div>
      </div>
    </div>
  );
};
