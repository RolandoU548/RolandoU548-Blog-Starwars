import React from "react";
import { People } from "../component/People";
import { Vehicles } from "../component/Vehicles";
import { Planets } from "../component/Planets";

export const Home = () => {
  return (
    <>
      <section className="characters my-5" style={{ background: "#fcfcfc" }}>
        <h1 className="ps-5 text-danger">Characters</h1>
        <div className="container-xxl d-flex overflow-auto">{<People />}</div>
      </section>
      <section className="vehicles my-5" style={{ background: "#fcfcfc" }}>
        <h1 className="ps-5 text-danger">Vehicles</h1>
        <div className="container-xxl d-flex overflow-auto">
          <Vehicles />
        </div>
      </section>
      <section className="planets my-5" style={{ background: "#fcfcfc" }}>
        <h1 className="ps-5 text-danger">Planets</h1>

        <div className="container-xxl d-flex overflow-auto">
          <Planets />
        </div>
      </section>
    </>
  );
};
