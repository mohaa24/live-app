import { Map, MapComp } from "../components/map/map";

export default function Contact() {
  return (
    <>
      <section className="hero-banner-about  ">
        <div className="hero-banner-about__inner">
          <div className="hero-banner-about__content">
            <div className="hero-banner-about__details">
              <div className=" hero-banner-about__heading">
                <h2 className="heading">Contact Us</h2>
                <div className="copy">
                  <p>Feel free to get in touch or come in and visit us.</p>
                </div>
              </div>
            </div>
            <div className="hero-banner-about__image">
              <img
                src="https://www.antonzhouk.com.au/static/Office-Web-6-672fb3c62bce0a7755ce3242ee58bde7.jpg"
                alt="The leaders in prestige"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="contact contact--contact">
        <div className="contact__inner">
          <div className="contact__content">
            <div className="contact__menu">
              {/* <div className="testimonials-heading"><h4>Property</h4></div> */}
            </div>
            <div className="contact__form">
              <h2> How can we help?</h2>
              <div></div>
              <form name="contact" className="form">
                <div className="column_left">
                  <div className="form__row form__row--double">
                    <div>
                      <label for="first-name-field">Name</label>
                      <input
                        type="text"
                        name="firstname"
                        id="first-name-field"
                        className="form__input"
                        required=""
                      />
                    </div>
                    {/* <div>
                        <label for="last-name-field">Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          id="last-name-field"
                          className="form__input"
                          required=""
                        />
                      </div> */}
                  </div>
                  <div className="form__row">
                    <label for="email-field">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email-field"
                      className="form__input"
                      required=""
                    />
                  </div>
                  <div className="form__row">
                    <label for="contact-field">Phone</label>
                    <input
                      type="text"
                      name="mobile"
                      id="contact-field"
                      className="form__input"
                      required=""
                    />
                  </div>

                  <div className="form__row">
                    <label for="address">Enquiry</label>
                    <div className="form__select form__select--blue">
                      <div
                        className="react-select-container css-b62m3t-container"
                        id="type"
                      >
                        <span
                          id="react-select-14-live-region"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <div className="react-select__control css-1s2u09g-control">
                          {/* <div className="react-select__value-container css-1d8n9bt">
                            <div
                              className="react-select__placeholder css-14el2xx-placeholder"
                              id="react-select-14-placeholder"
                            >
                              Please select
                            </div>
                            <div
                              className="react-select__input-container css-ackcql"
                              data-value=""
                            >
                              <input
                                className="react-select__input"
                                autocapitalize="none"
                                autocomplete="off"
                                autocorrect="off"
                                id="react-select-14-input"
                                spellcheck="false"
                                tabindex="0"
                                type="text"
                                aria-autocomplete="list"
                                aria-expanded="false"
                                aria-haspopup="true"
                                role="combobox"
                                aria-describedby="react-select-14-placeholder"
                                value=""
                              />
                            </div>
                          </div> */}
                          <div className="react-select__indicators css-1wy0on6">
                            <span className="react-select__indicator-separator css-1okebmr-indicatorSeparator"></span>
                            <div
                              className="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer"
                              aria-hidden="true"
                            >
                              <svg
                                height="20"
                                width="20"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                focusable="false"
                                className="css-8mmkcg"
                              >
                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <input name="type_of_enquiry" type="hidden" value="" />
                      </div>
                    </div>
                  </div>

                  <div className="form__row">
                    <textarea
                      name="comment"
                      placeholder="Your Message"
                      className="form__input form__textarea"
                    ></textarea>
                  </div>

                  <div className="form__row form__row--submit">
                    {/* <div className="form__checkbox">
                      <input
                        type="checkbox"
                        name="register"
                        id="contact-register-field"
                        className="form__input"
                        checked=""
                      />
                      <label for="contact-register-field">
                        By ticking this box, you consent to receive marketing
                        communications from Kollosche as per our{" "}
                        <strong>
                          <a href="/privacy-policy/">Privacy Policy. </a>
                        </strong>
                      </label>
                    </div> */}
                    <button type="submit" className="btn btn--border">
                      Send Enquiry
                    </button>
                  </div>
                </div>

                <div className="column_right">
                  <MapComp />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
