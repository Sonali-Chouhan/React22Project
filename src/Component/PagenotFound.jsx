import React from "react";
import "bulma/css/bulma.css";
import "bulma-helpers/css/bulma-helpers.min.css";

const PagenotFound = () => {
  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="has-text-centered has-text-danger is-size-1">404</h1>
          <h2 className="subtitle has-text-centered has-text-danger">
            OOPS, THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND!
          </h2>
          <div className="has-text-centered">
            <a href="/" className="button is-rounded has-text-success ">
              BACK TO HONEPAGE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PagenotFound;
