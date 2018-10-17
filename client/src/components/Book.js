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
                  type="text"
                  placeholder="Email address"
                  className="form__input"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Email adress
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
