import { MapComp } from "../components/map/map";
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
      {/* <section className="aboutSection">
        <div className="aboutIntro">
          <h1>ABOUT US</h1>

          <h3>
            A CORE BUSINESS MODEL BASED ON RELATIONSHIPS, EXCELLENCE AND
            AUTHENTICITY PREVAIL TO ENSURE A CUSTOMER EXPERIENCE OF THE HIGHEST
            STANDARD.
          </h3>
        </div>
        {imageSlides && imageSlides}
      </section> */}
      <section className="blogSection">
        <h1>Blog</h1>

        <div className="news_wrapper">
          <a class="card" href="/post">
            <img
              class="card__background"
              src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/08/165777114369571257-rsd.jpeg"
            />
            <div class="card__text-container">
              <p class="card__category">Post</p>
              <p class="card__title">The Best Suburb for Investors.</p>
            </div>
          </a>
          <a class="card" href="/post">
            <img
              class="card__background"
              src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/07/Feature-Image-scaled.jpg"
            />
            <div class="card__text-container">
              <p class="card__category">Article</p>
              <p class="card__title">
                The Gold Coast’s Newest Million Dollar Suburbs.
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
