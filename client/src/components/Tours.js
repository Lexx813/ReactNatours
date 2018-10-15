import React from "react";

const Tours = () => {
  return (
    <div className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div
              className="card__side
            card__side--front"
            >
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The Sea Explorer
                </span>
              </h4>
              <div className="card__details">details</div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              Back
            </div>
          </div>
        </div>
        <div className="col-1-of-3">Col 1 of 3</div>
        <div className="col-1-of-3">Col 1 of 3</div>
      </div>
    </div>
  );
};
export default Tours;
