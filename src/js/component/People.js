import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./Card";

export const People = () => {
  const { store } = useContext(Context);
  const characters = store.people;

  if (characters.length != 0) {
    return (
      <>
        {characters.map(character => (
          <Card key={character.uid} data={character} object="person" />
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
