import React from "react";

const Book = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <div className=" u-margin-bottom-medium">
              <h2 className="heading-secondary">Start booking now</h2>
            </div>
            <form action="#" className="form">
              <div className="form__group">
                <input
                  id="name"
                  type="text"
                  placeholder="Full name"
                  className="form__input"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="form__input"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email adress
                </label>
              </div>
              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    Large tour group
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
