import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const favorites = store.favorites;

  return (
    <nav className="navbar navbar-light fixed-top bg-light d-flex px-5">
      <Link to="/">
        <i className="fa-solid fa-jedi fs-5 text-dark">STAR WARS</i>
      </Link>

      <div className="btn-group">
        <button
          className="btn btn-primary dropdown-toggle "
          type="button"
          id="dropdownMenuClickableOutside"
          data-bs-toggle="dropdown"
          data-bs-auto-close="false"
          aria-expanded="false">
          Favorites
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {favorites.length}
            <span className="visually-hidden">favorites</span>
          </span>
        </button>

        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownMenuClickableOutside">
          {favorites.length === 0 ? (
            <li>
              <p className="dropdown-item">There are no favorites</p>
            </li>
          ) : (
            favorites.map(favorite => (
              <li className="dropdown-item" key={favorite.uid}>
                <div className="d-flex justify-content-between">
                  <Link
                    className="text-dark"
                    to={
                      (favorite.type === "person"
                        ? "/characters/"
                        : favorite.type === "vehicle"
                        ? "/vehicles/"
                        : "/planets/") + `${favorite.uid}`
                    }>
                    {favorite.name}
                  </Link>
                  <i
                    className="fa-solid fa-x mt-1"
                    onClick={() => {
                      actions.removeFavorite(favorite.name);
                    }}></i>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};
