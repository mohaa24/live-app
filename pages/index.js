import Head from "next/head";
import Script from "next/script";
import Select from "react-select";
import { TestimonialCard } from "../components/testimonials/testimonials";
import { BlogCard } from "../components/blog_card/blogCard";
import Fade from 'react-reveal/Fade';
import { Header } from "../components/header/header";
import { StatisticBar } from "../components/statisticBlock/statisticBar";
import { Weather } from "../components/weather/weather";
import Countup from 'react-countup';


import "swiper/css/bundle";




export default function Home() {
  const blueDropdown = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#60c2c9",
      borderRadius: 0,
      color: "#ffffff",
    }),
    placeholder: (styles) => ({ ...styles, color: "#ffffff", fontFamily: "Montserrat", fontWeight:'bold' }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    IndicatorContainer: (styles) => ({ ...styles, display: "none" }),
    dropdownIndicator:   (styles) => ({ ...styles, color: "white" }),
  };



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
   
      </Head>

      <div className="home body">
<Header></Header>
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
                      <button type="button">Request Appraisal</button>
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
                <div className="searchBar">
                  <div className="optionMenu">
                    {" "}
                    <Select
                      className="dropDown"
                      options={[
                        { value: "chocolate", label: "BUY" },
                        { value: "strawberry", label: "SALE" },
                        { value: "vanilla", label: "RENT" },
                      ]}
                      styles={blueDropdown}
                      placeholder="BUY"
                    ></Select>{" "}
                  </div>
                  <div className="searchArea"></div>
                </div>
                <div className="dropDownArea">
                  <Select
                    className="dropDown"
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                    styles={blueDropdown}
                    placeholder="MIN PRICE"
                  ></Select>
                  <Select
                    className="dropDown"
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                    styles={blueDropdown}
                    placeholder="MAX PRICE"
                  ></Select>
                  <Select
                    className="dropDown"
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                    styles={blueDropdown}
                    placeholder="BED"
                  ></Select>
                  <Select
                    className="dropDown"
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                    styles={blueDropdown}
                    placeholder="BATH"
                  ></Select>
                  <Select
                    className="dropDown"
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                    styles={blueDropdown}
                    placeholder="CAR"
                  ></Select>
                </div>
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
    The A - Z agency was born out of simple, yet radical idea:
                      real estate should be exclusively focussed on the
                      customer, providing a more personal and tailored aproach
                      for every client.
    </h2>
  </div>
  <div className="property-options__content">
    <div className="property-options__menu">
      <ul>
        <li className="active"><a href="/property/">Property</a></li>
      </ul>
    </div>
    <div className="property-options__slides">
      <div className="property-options__slider">
        <div className="property-option">
          <img
            className="property-option__image"
            loading="lazy"
            src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/MicrosoftTeams-image-4.jpg"
            alt=""
          /><span className="property-option__view">View</span>
          <div className="property-option__details">
            <p className="title">Properties for sale</p>
            <div className="copy">
              Discover the most luxurious residential real estate from Sovereign
              Islands to Byron Bay.
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
          /><span className="property-option__view">View</span>
          <div className="property-option__details">
            <p className="title">Properties for lease</p>
            <div className="copy">
              Choose from a top shelf range of off-the-plan apartments to call
              home, holiday haven or investment.
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
</section>


<section className="business-data">
  <div className="business-data__inner">
    <div className="business-data__content">
      <div className="business-data__heading">
        <h5
          className=""
         
        >
          By the <br />
          numbers
        </h5>
      </div>
      <div className=" business-data__items">
        <div
          className="business-data__item"
        
        >
          <p className="value">
          <Countup className="number-block"
                                    duration={2}
                                    end={102}
                                    delay={1}
                             
                                    enableScrollSpy={true}
                                />
            
            </p>
          <p className="label">
          TRANSACTIONS <br/> IN THE PAST 3 YEARS
          </p>
        </div>
        <div
          className="business-data__item"
         
        >
          <p className="value">$<Countup className="number-block"
                                    duration={2}
                                    end={6.7}
                                    delay={1}
                                    decimals={1}
  decimal="."
                                    enableScrollSpy={true}
                                />M</p>
          <p className="label">
          HIGHEST SALE PRICE
          </p>
        </div>
        <div
          className="business-data__item"
         
        >
          <p className="value">$ <Countup className="number-block"
                                    duration={2}
                                    end={243}
                                    delay={1}
                                    
                                    enableScrollSpy={true}
                                />M</p>
          <p className="label">
          AVERAGE SALE PRICE
          </p>
        </div>
        <div
          className="business-data__item"
        
        >
          <p className="value">$ <Countup className="number-block"
                                    duration={2}
                                    end={238}
                                    delay={1}
                             
                                    enableScrollSpy={true}
                                />M</p>
          <p className="label">
          TOTAL VALUE OF PROPERTY SOLD
          </p>
        </div>
        <div
          className="business-data__item"
         
        >
          <p className="value">$ <Countup className="number-block"
                                    duration={2}
                                    end={10.2}
                                    delay={1}
                                    decimals={1}
  decimal="."
                                    enableScrollSpy={true}
                                />M</p>
          <p className="label">
          SUM TOTAL ACHIEVED ABOVE CLIENT'S EXPECTATIONS
          </p>
        </div>
        <div
          className="business-data__disclaimer"
        
        >
          <div>
            <h6><em>Statistics based on 2021 calendar year</em></h6>
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

      <footer className="footer">
        <div className="footer__top">
          <div className="footer__inner">
            <div className="footer__cols">
              <div className="footer__col">
                <div className="footer__logo">
                  <a aria-current="page" title="A__Z" className="" href="/">
                    <img
                      className="logo-img"
                      src="http://shifaza21.sg-host.com/wp-content/uploads/2022/07/0263_ANTONZHOUK_DEVICE.png"
                    ></img>
                  </a>
                </div>
                <div className="footer__address">
                  <p>
                    130 AUBURN ROAD, HAWTHORN, 3122
                    <br/>
                    <a href="mailto:CONTACT@ANTONZHOUK.COM.AU">
                      CONTACT@ANTONZHOUK.COM.AU
                    </a>
                    <br />
                    <a href="tel:03 9815 1124">03 9815 1124</a>
                    <br />
              
                  </p>
                </div>
              </div>

              <div className="footer__col">
                <h4>{'‎'}</h4>
                <ul className="">
                  <li>
                    <a href="/about-us/">Buy</a>
                  </li>

                  <li>
                    <a href="/careers/">Sell</a>
                  </li>
                  <li>
                    <a href="/careers/">Rent</a>
                  </li>
                </ul>
                
              
              </div>
              <div className="footer__col">
                <h4 className="">About</h4>
                <ul className="">
                  <li>
                    <a href="/about-us/">About Us</a>
                  </li>

                  <li>
                    <a href="/careers/">News</a>
                  </li>
                  <li>
                    <a href="/careers/">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className="">Connect</h4>
                <ul className="">
                 
                  <li>
                    <a
                      to="https://www.facebook.com/"
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      to="https://www.instagram.com/"
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      to="https://www.linkedin.com//"
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="copyright" data-layout="default"></div>
        <div className="footer__bottom">
          <div className="footer__inner">
            <div className="footer__cols">
            <div className="footer__col"><ul><li><a href="/terms-conditions/">Terms &amp; Conditions</a></li><li><a href="/privacy-policy/">Privacy Policy</a></li></ul></div>
            
            </div>
        
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-text">
            © 2022 Anton Zhouk - Real Estate Agency.
          </div>
          <div className="footer-bottom-icons">
            {/* <ul className="social">
              <li>
                <a target="_blank" rel="noopener" href="#%20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener" href="#%20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                  </svg>{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </footer>
    </>
  );
}
