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
  const [modalIsOpen, setIsOpen] = useState(true);

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
              <h2>Hello</h2>
              <button onClick={closeModal}>close</button>
              <div>I am a modal</div>
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
                The A — Z Agency was born out of simple, yet radical idea: real
                estate should be exclusively focussed on the customer, providing
                a more personal and tailored aproach for every client.
              </h2>
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
            <div className="property-options__heading">
              <h2>
                Relationships, Excellence and Authenticity prevail to ensure a
                customer experience of the highest standard
              </h2>
            </div>
          </section>

          <section className="business-data">
            <div className="business-data__inner">
              <div className="business-data__content">
                <div className="business-data__heading">
                  <h5 className="">
                    By the <br />
                    numbers
                  </h5>
                </div>
                <div className=" business-data__items">
                  <div className="business-data__item">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M4.82 19.407c-2.966-1.857-4.94-5.153-4.94-8.907 0-5.795 4.705-10.5 10.5-10.5 3.605 0 6.789 1.821 8.68 4.593 2.966 1.857 4.94 5.153 4.94 8.907 0 5.795-4.705 10.5-10.5 10.5-3.599 0-6.778-1.815-8.67-4.579l-.01-.014zm8.68-15.407c5.243 0 9.5 4.257 9.5 9.5s-4.257 9.5-9.5 9.5-9.5-4.257-9.5-9.5 4.257-9.5 9.5-9.5zm.5 15h-1.021v-.871c-2.343-.302-2.599-2.179-2.599-2.744h1.091c.025.405.157 1.774 2.182 1.774.599 0 1.088-.141 1.453-.419.361-.276.536-.612.536-1.029 0-.793-.513-1.367-2.07-1.718-2.368-.536-2.923-1.398-2.923-2.533 0-1.509 1.223-2.216 2.33-2.406v-1.054h1.021v1.015c2.491.195 2.695 2.215 2.695 2.771h-1.098c0-1.161-.918-1.766-1.996-1.766-1.077 0-1.854.532-1.854 1.408 0 .781.439 1.165 1.994 1.554 1.879.473 2.999 1.101 2.999 2.681 0 1.744-1.509 2.393-2.74 2.493v.844zm2.85-15.453c-1.696-1.58-3.971-2.547-6.47-2.547-5.243 0-9.5 4.257-9.5 9.5 0 2.633 1.073 5.017 2.806 6.739l-.004-.01c-.44-1.159-.682-2.416-.682-3.729 0-5.795 4.705-10.5 10.5-10.5 1.171 0 2.298.192 3.35.547z" />
                      </svg>
                    </div>
                    <p className="value">
                      $
                      <Countup
                        className="number-block"
                        duration={2}
                        end={6.7}
                        delay={1}
                        decimals={1}
                        decimal="."
                        enableScrollSpy={true}
                      />
                      M
                    </p>
                    <p className="label">HIGHEST SALE PRICE</p>
                  </div>
                  <div className="business-data__item">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M2 9.453v-9.453h9.352l10.648 10.625-3.794 3.794 1.849 4.733-12.34 4.848-5.715-14.547zm1.761 1.748l4.519 11.503 10.48-4.118-1.326-3.395-4.809 4.809-8.864-8.799zm-.761-10.201v8.036l9.622 9.552 7.963-7.962-9.647-9.626h-7.938zm12.25 8.293c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.803-.682.411-1.118.585-1.456.585-.361 0-1.083-.409-.961-1.219.052-.345.25-.696.572-1.019.652-.652 1.544-.848 2.276-.107l.744-.744c-.476-.475-1.096-.792-1.761-.792-.566 0-1.125.228-1.663.677l-.626-.626-.698.699.653.652c-.569.826-.842 2.021.076 2.937 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589.001 1.18.498 1.078 1.258-.052.386-.26.764-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.25-7.292c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
                      </svg>
                    </div>
                    <p className="value">
                      $
                      <Countup
                        className="number-block"
                        duration={2}
                        end={243}
                        delay={1}
                        enableScrollSpy={true}
                      />
                      M
                    </p>
                    <p className="label">AVERAGE SALE PRICE</p>
                  </div>
                  <div className="business-data__item">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M2.001 9.977c.011-1.215.13-1.443 1.079-1.651 1.166-.256 1.847-.479 1.321-1.422-1.6-2.869-.089-4.404 1.601-4.404 1.723 0 3.207 1.593 1.603 4.404-.299.522-.215.825.111 1.033.207-.171.507-.302.942-.397 1.509-.331 2.391-.621 1.709-1.841-2.068-3.709-.552-5.694 1.63-5.699h.008c2.182.005 3.698 1.99 1.63 5.699-.681 1.22.2 1.51 1.71 1.841.435.095.734.226.941.397.327-.208.41-.511.112-1.033-1.604-2.811-.12-4.404 1.603-4.404 1.689 0 3.2 1.535 1.601 4.404-.527.943.154 1.166 1.32 1.422.949.208 1.069.436 1.079 1.651l-.002 1.023-7.999 8v5l-4-1.325v-3.675l-7.996-8-.003-1.023zm18.584 1.023h-17.167l7.582 7.586v3.367l2 .662v-4.029l7.585-7.586zm-8.362 5.914h-.444v-.443c-.459-.008-.934-.117-1.33-.322l.202-.729c.424.164.988.339 1.43.239.51-.115.614-.64.051-.891-.413-.193-1.676-.358-1.676-1.439 0-.604.461-1.145 1.323-1.264v-.473h.444v.451c.321.009.681.065 1.083.187l-.16.731c-.341-.12-.717-.229-1.084-.207-.66.039-.718.611-.257.85.759.357 1.748.622 1.748 1.573.001.762-.595 1.167-1.33 1.27v.467zm3.461-6.914c.005-1.353.055-1.347-.576-1.485-.065-.015-3.958-.501-2.404-3.284.867-1.554 1.093-2.873.622-3.617-.26-.41-.791-.617-1.325-.617-.533 0-1.065.207-1.324.617-.472.744-.246 2.063.621 3.617 1.555 2.783-2.339 3.269-2.403 3.284-.632.138-.582.132-.576 1.485h7.365zm-8.397-1.14c-.321-.172-.61-.415-.78-.774-.234-.492-.176-1.051.172-1.659.574-1.007.714-1.887.383-2.414-.434-.693-1.69-.676-2.111-.012-.331.521-.192 1.409.381 2.436.341.61.395 1.167.16 1.657-.415.863-1.539 1.061-2.13 1.197-.231.053-.296.068-.304.341l-.002.368h4.209c0-.442-.011-.819.022-1.14zm13.66 1.14l-.003-.368c-.007-.273-.072-.288-.304-.341-.591-.136-1.714-.334-2.13-1.197-.234-.49-.181-1.047.16-1.657.573-1.027.712-1.915.382-2.436-.422-.664-1.678-.681-2.112.012-.331.527-.191 1.407.383 2.414.348.608.406 1.167.172 1.659-.17.359-.458.602-.78.774.034.321.022.698.022 1.14h4.21z" />
                      </svg>
                    </div>
                    <p className="value">
                      $
                      <Countup
                        className="number-block"
                        duration={2}
                        end={238}
                        delay={1}
                        enableScrollSpy={true}
                      />
                      M
                    </p>
                    <p className="label">TOTAL VALUE OF PROPERTY SOLD</p>
                  </div>
                  <div className="business-data__item">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 10c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm.5 8.474v.526h-.5v-.499c-.518-.009-1.053-.132-1.5-.363l.228-.822c.478.186 1.114.383 1.612.27.574-.13.692-.721.057-1.005-.465-.217-1.889-.402-1.889-1.622 0-.681.52-1.292 1.492-1.425v-.534h.5v.509c.362.01.768.073 1.221.21l-.181.824c-.384-.135-.808-.257-1.222-.232-.744.043-.81.688-.29.958.856.402 1.972.7 1.972 1.773.001.858-.672 1.315-1.5 1.432zm-7.911-5.474h-2.589v-2h3.765c-.484.602-.881 1.274-1.176 2zm-.589 3h-2v-2h2.264c-.166.641-.264 1.309-.264 2zm2.727-6h-4.727v-2h7v.589c-.839.341-1.604.822-2.273 1.411zm2.273-6h-7v-2h7v2zm0 3h-7v-2h7v2zm-4.411 12h-2.589v-2h2.069c.088.698.264 1.369.52 2zm-10.589-11h7v2h-7v-2zm0 3h7v2h-7v-2zm12.727 11h-4.727v-2h3.082c.438.753.994 1.428 1.645 2zm-12.727-5h7v2h-7v-2zm0 3h7v2h-7v-2zm0-6h7v2h-7v-2z" />
                      </svg>
                    </div>
                    <p className="value">
                      <Countup
                        className="number-block"
                        duration={2}
                        end={102}
                        delay={1}
                        enableScrollSpy={true}
                      />
                    </p>
                    <p className="label">
                      TRANSACTIONS <br /> IN THE PAST 3 YEARS
                    </p>
                  </div>
                  <div className="business-data__item">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M6.994 15.026v-1.833c-.004-1.295-.168-2.66 2.502-3.268 1.01-.229 2.395-.544 2.622-1.046.024-.051.095-.209-.106-.582-1.431-2.638-1.698-4.965-.754-6.552.65-1.092 1.834-1.719 3.248-1.719 1.403 0 2.579.618 3.228 1.694.943 1.568.684 3.902-.731 6.573-.198.376-.125.535-.101.587.231.502 1.571.808 2.647 1.053 2.77.631 2.416 2.236 2.451 3.279v3.958c0 .49-.201.977-.609 1.356-1.378 1.28-4.453 4.026-4.935 4.467-.749.687-1.518 1.006-2.421 1.006-.405 0-.832-.065-1.308-.2-2.773-.783-4.484-1.036-5.727-1.105v1.332h-5v-9h4.994zm-.994 1h-3v7h3v-7zm1 5.664c2.092.118 4.405.696 5.999 1.147.817.231 1.761.354 2.782-.581 1.279-1.172 2.722-2.413 4.929-4.463.824-.765-.178-1.783-1.022-1.113 0 0-2.961 2.299-3.689 2.843-.379.285-.695.519-1.148.519-.36 0-2.232-.467-3.104-.743-.575-.183-.371-.993.268-.858.447.093 1.594.35 2.201.52 1.017.281 1.276-.867.422-1.152-.562-.19-.537-.198-1.889-.665-1.301-.451-2.214-.753-3.585-.156-.639.278-1.432.616-2.164.814v3.888zm14.006-6.066v-2.422c.008-1.858-.269-1.972-1.679-2.294-1.49-.34-2.898-.66-3.334-1.611-.201-.438-.158-.933.126-1.472 1.244-2.349 1.513-4.334.757-5.59-.469-.779-1.31-1.209-2.37-1.209-1.068 0-1.916.437-2.389 1.23-.757 1.272-.482 3.248.774 5.565.291.537.338 1.032.138 1.471-.432.955-1.897 1.287-3.312 1.608-1.402.321-1.724.415-1.717 2.297v3.2l.765-.325c.642-.28 1.259-.417 1.887-.417 1.214 0 2.205.499 4.303 1.205.64.214 1.076.716 1.175 1.306 1.124-.863 2.92-2.257 2.937-2.27.357-.284.773-.434 1.2-.434.262 0 .513.058.739.162z" />
                      </svg>
                    </div>
                    <p className="value">
                      $
                      <Countup
                        className="number-block"
                        duration={2}
                        end={10.2}
                        delay={1}
                        decimals={1}
                        decimal="."
                        enableScrollSpy={true}
                      />
                      M
                    </p>
                    <p className="label">
                      SUM TOTAL ACHIEVED ABOVE CLIENT'S EXPECTATIONS
                    </p>
                  </div>
                  <div className="business-data__disclaimer">
                    <div>
                      <h6>
                        <em>Statistics based on 2021 calendar year</em>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <BlogCard></BlogCard>
              <BlogCard></BlogCard>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
