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
      <section className="postSection">
        <h1>Post title comes here...</h1>

        <div className="postContent">
          <div className="postMeta">
            <div className="authorDetails">
              Steven Dick, Commercial Partner, A__Z
            </div>
            <div className="postedTime">April 2022</div>
          </div>
          <hr/>

          <p>
            <img
              src="https://images.unsplash.com/photo-1601168049797-351a4abb0b2f?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY1MDY1NDk3Nw&amp;ixlib=rb-1.2.1&amp;q=85"
              alt="a green hummingbird flying among yellow flowers"
              title="Photo by Geronimo Giqueaux for Unsplash"
              class="editorial-image-right"
            ></img>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            imperdiet ut quam sit amet vehicula. Donec sit amet facilisis quam.
            Integer mollis, urna accumsan tempor hendrerit, risus neque
            tincidunt neque, in aliquam elit eros quis tortor. Sed id venenatis
            massa, ut malesuada sem. Nam lacinia sodales tellus nec efficitur.
            Vestibulum fringilla nisl ac iaculis ultricies. Sed commodo
            imperdiet metus vitae molestie. In laoreet rutrum pretium. Aenean a
            enim ac lacus tincidunt pellentesque ac a tellus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vivamus imperdiet ut quam sit
            amet vehicula. Donec sit amet facilisis quam. Integer mollis, urna
            accumsan tempor hendrerit, risus neque tincidunt neque, in aliquam
            elit eros quis tortor. Sed id venenatis massa, ut malesuada sem. Nam
            lacinia sodales tellus nec efficitur. Vestibulum fringilla nisl ac
            iaculis ultricies.
            <br />
            <br />
            Sed commodo imperdiet metus vitae molestie. In laoreet rutrum
            pretium. Aenean a enim ac lacus tincidunt pellentesque ac a tellus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            imperdiet ut quam sit amet vehicula. Donec sit amet facilisis quam.
            Integer mollis, urna accumsan tempor hendrerit, risus neque
            tincidunt neque, in aliquam elit eros quis tortor. Sed id venenatis
            massa, ut malesuada sem. Nam lacinia sodales tellus nec efficitur.
            Vestibulum fringilla nisl ac iaculis ultricies. Sed commodo
            imperdiet metus vitae molestie. In laoreet rutrum pretium. Aenean a
            enim ac lacus tincidunt pellentesque ac a tellus.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vivamus imperdiet ut quam sit
            amet vehicula. Donec sit amet facilisis quam. Integer mollis, urna
            accumsan tempor hendrerit, risus neque tincidunt neque, in aliquam
            elit eros quis tortor. Sed id venenatis massa, ut malesuada sem. Nam
            lacinia sodales tellus nec efficitur. Vestibulum fringilla nisl ac
            iaculis ultricies. Sed commodo imperdiet metus vitae molestie. In
            laoreet rutrum pretium. Aenean a enim ac lacus tincidunt
            pellentesque ac a tellus.
          </p>
        </div>
      </section>
    </>
  );
}
