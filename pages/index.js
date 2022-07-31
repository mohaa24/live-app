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

import { Search } from "../components/search/search";
import Modal from "react-modal";
import { useState } from "react";
import { Appraisal } from "../components/appraisal/appraisal";





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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className="appraisalContainer">
          <div className="appraisalHeader">
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
          </div>
          <div className="content">
      <Appraisal/>
          </div>
        </div>
      </Modal>

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
          </section>

          <section className="property-options light-theme">
            <div className="property-options__heading">
              <h2>
                Relationships.Excellence.Authenticity.
                <br />
              </h2>
              <h3>
                The A — Z Agency was born of a simple, yet radical idea: real
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
