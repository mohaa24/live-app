import {  MapComp } from "../components/map/map";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { Appraisal } from "../components/appraisal/appraisal";
// import andersonPark from "../public/andersonPark";
const AboutSlide = styled.div`
  height: 100vh;
`;

export default function Contact() {


  const imageSlides = [1].map((i) => {
    return (
      <AboutSlide
        className="propertySlides"
        style={{
          background: `url(/andersonPark.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <img
          className="propertImage"
          src={i.url}
          alt="1403/14 George Avenue Broadbeach"
        /> */}
      </AboutSlide>
    );
  });
  return (
    <>
      <section className="aboutSection">
        <div className="aboutIntro">
          <h1>ABOUT US</h1>

          <h3>
            A CORE BUSINESS MODEL BASED ON RELATIONSHIPS, EXCELLENCE AND
            AUTHENTICITY PREVAIL TO ENSURE A CUSTOMER EXPERIENCE OF THE HIGHEST
            STANDARD.
          </h3>
        </div>
     {imageSlides && imageSlides}
      </section>
      <section className="contact contact--contact">
        <div className="contact__inner">
          <div className="contact__content">
            <div className="contact__menu">
              {/* <div className="testimonials-heading"><h4>Property</h4></div> */}

              <div className="contact__form"></div>

           <Appraisal/>
            </div>
          </div>
        </div>
        <div className="mapContainer">
          <MapComp lat={10.99835602} long={77.01502627} width={'100%'} />
        </div>
      </section>
    </>
  );
}
