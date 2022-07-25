import Head from "next/head";
import Script from "next/script";
import Select from "react-select";
import { TestimonialCard } from "../components/testimonials/testimonials";
import { BlogCard } from "../components/blog_card/blogCard";
import Fade from "react-reveal/Fade";
import { Header } from "../components/header/header";
import { StatisticBar } from "../components/statisticBlock/statisticBar";
import { Weather } from "../components/weather/weather";
import Countup from "react-countup";

import "swiper/css/bundle";
import { Search } from "../components/search/search";
import Modal from "react-modal";
import { useState } from "react";





export default function Home() {
  const blueDropdown = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#A9C5DB",
      borderRadius: 0,
      color: "#ffffff",
      fontSize: "20px",
      borderColor: "#A9C5DB",
      minHeight: "45px",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#ffffff",

      fontWeight: "bold",
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    IndicatorContainer: (styles) => ({ ...styles, display: "none" }),
    dropdownIndicator: (styles) => ({ ...styles, color: "white" }),
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth:'20vw'
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Head>
        <title>A__Z</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home body">
        <main>
          <section className="hero-banner">
            <video
              src="http://shifaza21.sg-host.com/wp-content/uploads/2022/07/WEB3-2.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>

            <div className="hero-banner__inner">
              <div className="hero-banner__content">
                <Fade top delay={2500}>
                  <div className="hero-banner__menu">
                    <ul className="">
                      <li className="">
                        <button
                          type="button"
                          onClick={() => {
                            openModal();
                          }}
                          className="appraisal-button"
                        >
                          Request Appraisal
                        </button>
                      </li>
                    </ul>
                  </div>
                </Fade>
                <Fade bottom delay={2000}>
                  <div className=" hero-banner__heading">
                    <h1>OPENING DOORS TO MELBOURNE'S FINEST HOMES</h1>
                  </div>
                </Fade>
                <Fade bottom delay={2700}>
                  <Search activePage={"index"} />
                </Fade>

                <Fade delay={2800}>
                  <Weather></Weather>
                </Fade>
              </div>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              style={customStyles}
            >
              <h2>Appraisal Form</h2>

              <svg
                className="closeBtn"
                onClick={closeModal}
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
              </svg>

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
              </form>
            </Modal>
          </section>

          <section className="property-options light-theme">
            <div className="property-options__heading">
              <h2>
                Relationships.Excellence.Authenticity.
                <br />
                <br />
              </h2>
              <h3>
                The A — Z Agency was born out of simple, yet radical idea: real
                estate should be exclusively focussed on the customer, providing
                a more personal and tailored aproach for every client.
              </h3>
            </div>
            <div className="property-options__content">
              <div className="property-options__menu">
                <div className="testimonials-heading">
                  <h4>Property</h4>
                </div>
              </div>
              <div className="property-options__slides">
                <div className="property-options__slider">
                  <div className="property-option">
                    <img
                      className="property-option__image"
                      loading="lazy"
                      src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/MicrosoftTeams-image-4.jpg"
                      alt=""
                    />
                    <span className="property-option__view">View</span>
                    <div className="property-option__details">
                      <p className="title">Properties for sale</p>
                      <div className="copy">
                        Discover the most luxurious residential real estate from
                        Sovereign Islands to Byron Bay.
                      </div>
                    </div>
                    <a className="property-option__link" href="/buy/"></a>
                  </div>
                  <div className="property-option">
                    <img
                      className="property-option__image"
                      loading="lazy"
                      src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/Untitled-design-2.png"
                      alt=""
                    />
                    <span className="property-option__view">View</span>
                    <div className="property-option__details">
                      <p className="title">Properties for lease</p>
                      <div className="copy">
                        Choose from a top shelf range of off-the-plan apartments
                        to call home, holiday haven or investment.
                      </div>
                    </div>
                    <a className="property-option__link" href="/projects/"></a>
                  </div>
                  {/* <div className="property-option">
          <img
            className="property-option__image"
            loading="lazy"
            src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/Untitled-design-9.png"
            alt=""
          /><span className="property-option__view">View</span>
          <div className="property-option__details">
            <p className="title">Commercial</p>
            <div className="copy">
              Our Commercial team can open up a range of opportunities across
              retail, industrial and development.
            </div>
          </div>
          <a className="property-option__link" href="/commercial/"></a>
        </div> */}
                </div>
              </div>
            </div>
            <div className="property-options__heading"></div>
          </section>

      
          <section className="testimonials-section">
            <div className="testimonials-heading">
              <h4>THE PROOF</h4>
            </div>

            <div className="testimonials">
              <TestimonialCard></TestimonialCard>
            </div>
          </section>

          <section className="blog-section">
            <div className="testimonials-heading">
              <h4>LATEST INSIGHTS</h4>
            </div>
            <div className="blog-container">
              <BlogCard></BlogCard>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
