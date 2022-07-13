import Head from "next/head";
import Script from "next/script";
import Select from "react-select";
import { TestimonialCard } from "../components/testimonials/testimonials";
import { BlogCard } from "../components/blog_card/blogCard";
import Fade from 'react-reveal/Fade';
import Countup from 'react-countup';



export default function Home() {
  const blueDropdown = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#a9c5db",
      borderRadius: 0,
      color: "#ffffff",
    }),
    placeholder: (styles) => ({ ...styles, color: "#ffffff", fontFamily: "Montserrat", fontWeight:'bold' }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    IndicatorContainer: (styles) => ({ ...styles, display: "none" }),
    dropdownIndicator:   (styles) => ({ ...styles, color: "white" }),
  };

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }
  function scrollFunction() {
    if (document.documentElement.scrollTop > 10) {
      document.getElementById("header").style.background = "#a9c5db";
      document.getElementById("header").style.borderBottom =
        "1px solid hsla(0,0%,100%,.2)";
    } else {
      document.getElementById("header").style.background = "transparent";
      document.getElementById("header").style.borderBottom = "none";
      console.log('transparent')
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="home body">
        <header className="header" id="header">
          <div className="header__inner">
            <a aria-current="page" className="header__logo active" href="/">
              <img
                className="logo-img"
                src="http://shifaza21.sg-host.com/wp-content/uploads/2022/07/0263_ANTONZHOUK_DEVICE.png"
              ></img>
            </a>
            <nav className="header__nav">
              <ul>
                <li>
                  <a href="/buy/">Buy</a>
                  <ul className="header__sub-nav">
                    <li>
                      <a href="/buy/">Residential</a>
                    </li>
                    <li>
                      <a href="/buy-commercial/">Commercial</a>
                    </li>
                    <li>
                      <a href="/projects/">New Projects</a>
                    </li>
                    <li>
                      <a href="/off-market/">Off Market</a>
                    </li>
                    <li>
                      <a href="/suburb-guides/">Suburb Profiles</a>
                    </li>
                    <li>
                      <a href="/appraisal/">Appraisal</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/sold/">Sell</a>
                  <ul className="header__sub-nav menu-sold">
                    <li>
                      <a href="/sold/">Residential</a>
                    </li>
                    <li>
                      <a href="/sold-commercial/">Commercial</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/lease/">Rent</a>
                  <ul className="header__sub-nav menu-lease">
                    <li>
                      <a href="/lease/">Residential</a>
                    </li>
                    <li>
                      <a href="/lease-commercial/">Commercial</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/about-us/">About</a>
                  <ul className="header__sub-nav menu-about">
                    <li>
                      <a href="/contact-us/">Contact Us</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/blog/">Blog</a>
                </li>
                <li>
                  <a href="/contactt-us/">Contact</a>
                </li>
                <li>
                  <a className="header__search-icon" href="/buy/">
                    <svg
                      width="19px"
                      height="18px"
                      viewBox="0 0 19 18"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g transform="translate(-1289.000000, -46.000000)">
                          <g transform="translate(1289.000000, 46.000000)">
                            <g>
                              <g>
                                <path
                                  d="M18.6635459,17.284253 L11.6362006,10.9253654 C13.1367102,9.17733337 13.6202361,6.77412093 12.9112432,4.58183552 C12.2032082,2.38959923 10.405318,0.724091073 8.16612176,0.184001938 C5.92591848,-0.355178451 3.56664508,0.308723477 1.93778144,1.93778114 C0.308721319,3.56684127 -0.355178153,5.92594275 0.184002237,8.16612146 C0.724140492,10.4053669 2.38967321,12.2034044 4.58183582,12.9112429 C6.7740721,13.6202358 9.17738279,13.1367025 10.9253657,11.6362003 L17.9477988,18 L18.6635459,17.284253 Z M2.65141627,10.5820072 C1.59032164,9.52857551 0.991655311,8.09720422 0.987813382,6.60145942 C0.984945581,5.1067216 1.57592909,3.67137148 2.63223439,2.61329781 C3.68758182,1.55411892 5.12194951,0.959284049 6.61671189,0.959284049 C8.11147427,0.959284049 9.5458174,1.55411892 10.6011894,2.61329781 C11.6574947,3.67151884 12.2484735,5.10669704 12.2456104,6.60145942 C12.2417623,8.0971551 11.6431021,9.52860007 10.5820075,10.5820072 C9.5362633,11.6440597 8.10776561,12.2417682 6.61668733,12.2417682 C5.12560905,12.2417682 3.69716048,11.6440597 2.65136715,10.5820072 L2.65141627,10.5820072 Z"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>

                {/* <li><button className="header__hamburger" type="button"><span className="lines"></span></button></li> */}
              </ul>
            </nav>
          </div>
        </header>

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
                    <li className="active">
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
                    placeholder="Min Price"
                  ></Select>
                  <Select
                    className="dropDown"
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                    styles={blueDropdown}
                    placeholder="Max Price"
                  ></Select>
                  <Select
                    className="dropDown"
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                    styles={blueDropdown}
                    placeholder="Bed"
                  ></Select>
                  <Select
                    className="dropDown"
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                    styles={blueDropdown}
                    placeholder="Bath"
                  ></Select>
                  <Select
                    className="dropDown"
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                    styles={blueDropdown}
                    placeholder="Car"
                  ></Select>
                </div>
                </Fade>

                <Fade delay={2800}>
                <div className=" hero-banner__weather hero-banner__weather--desktop">
                  <section className="weather">
                    <div className="weather__inner">
                      <div className="weather__content">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              transform="translate(-622.000000, -644.000000)"
                              fill="#FFFFFF"
                              fillRule="nonzero"
                            >
                              <g transform="translate(622.000000, 644.000000)">
                                <path d="M5.57894737,6.31578947 L2.52631579,3.26315789 L3.26315789,2.52631579 L6.31578947,5.57894737 L5.57894737,6.31578947 Z M4.21052632,9.47368421 L0,9.47368421 L0,10.5263158 L4.21052632,10.5263158 L4.21052632,9.47368421 Z M17.4736842,3.26315789 L16.7368421,2.52631579 L13.6842105,5.57894737 L14.4210526,6.31578947 L17.4736842,3.26315789 Z M10.5263158,0 L9.47368421,0 L9.47368421,4.21052632 L10.5263158,4.21052632 L10.5263158,0 Z M14.7368421,10 C14.7368421,12.6315789 12.6315789,14.7368421 10,14.7368421 C7.36842105,14.7368421 5.26315789,12.6315789 5.26315789,10 C5.26315789,7.36842105 7.36842105,5.26315789 10,5.26315789 C12.6315789,5.26315789 14.7368421,7.36842105 14.7368421,10 Z M13.6842105,10 C13.6842105,8 12,6.31578947 10,6.31578947 C8,6.31578947 6.31578947,8 6.31578947,10 C6.31578947,12 8,13.6842105 10,13.6842105 C12,13.6842105 13.6842105,12 13.6842105,10 Z M15.7894737,9.47368421 L15.7894737,10.5263158 L20,10.5263158 L20,9.47368421 L15.7894737,9.47368421 Z M13.6842105,14.4210526 L16.6315789,17.3684211 L17.3684211,16.6315789 L14.4210526,13.6842105 L13.6842105,14.4210526 Z M9.47368421,20 L10.5263158,20 L10.5263158,15.7894737 L9.47368421,15.7894737 L9.47368421,20 Z M2.52631579,16.7368421 L3.26315789,17.4736842 L6.31578947,14.4210526 L5.57894737,13.6842105 L2.52631579,16.7368421 Z"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <p>
                          Hawthorn VIC 3122<span> 9° C</span>
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
                </Fade>
              </div>
            </div>
          </section>
          <section className="property-options light-theme">
   
            <div className="property-options__heading">
            
            </div>
  
       
            <div className="property-options__content">
              <div className="property-options__menu">
                <div className="property-options__heading">
                  <div className="statistic-section">
                    <h3>
                      The A - Z agency was born out of simple, yet radical idea:
                      real estate should be exclusively focussed on the
                      customer, providing a more personal and tailored aproach
                      for every client.
                    </h3>
                    <div className="statistic-bar">
                      <div className="statistic-block">
                        <div className="number-block">
                           
                          <Countup className="number-block"
                                    duration={2}
                                    end={102}
                                    delay={1}
                                    enableScrollSpy={true}
                                />
                          </div>
                        <div className="text-block">
                        transactions in the past 3 years
                        </div>
                      </div>
                      <div className="statistic-block">
                        <div className="number-block">$  <Countup className="number-block"
                                    duration={2}
                                    end={6.7}
                                    delay={1}
                                    decimals={1}
  decimal="."
                                    enableScrollSpy={true}
                                />M</div>
                        <div className="text-block">
                        highest sale price
                        </div>
                      </div>
                      <div className="statistic-block">
                        <div className="number-block">$<Countup className="number-block"
                                    duration={2}
                                    end={243}
                                    delay={1}
                                    
                                    enableScrollSpy={true}
                                />M</div>
                        <div className="text-block">
                        average sale price
                        </div>
                      </div> <div className="statistic-block">
                        <div className="number-block">$<Countup className="number-block"
                                    duration={2}
                                    end={238}
                                    delay={1}
                             
                                    enableScrollSpy={true}
                                />M</div>
                        <div className="text-block">
                          TOTAL VALUE OF PROPERTY SOLD
                        </div>
                      </div> <div className="statistic-block">
                        <div className="number-block">$<Countup className="number-block"
                                    duration={2}
                                    end={10.2}
                                    delay={1}
                                    decimals={1}
  decimal="."
                                    enableScrollSpy={true}
                                />M</div>
                        <div className="text-block">
                        sum total achieved above client's expectations
                        </div>
                      </div>

                    </div>
                  </div>
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
                  {/* 

                <div className="property-option"><img className="property-option__image" loading="lazy"
                    src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/Untitled-design-2.png"
                    alt=""/><span className="property-option__view">View</span>
                  <div className="property-option__details">
                    <p className="title">New Projects</p>
                    <div className="copy">Choose from a top shelf range of off-the-plan apartments to call home, holiday
                      haven or investment. </div>
                  </div><a className="property-option__link" href="/projects/"></a>
                </div> */}

                  {/* <div className="property-option"><img className="property-option__image" loading="lazy"
                    src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/Untitled-design-9.png"
                    alt=""/><span className="property-option__view">View</span>
                  <div className="property-option__details">
                    <p className="title">Commercial</p>
                    <div className="copy">Our Commercial team can open up a range of opportunities across retail, industrial
                      and development.</div>
                  </div><a className="property-option__link" href="/commercial/"></a>
                </div> */}

                  <div className="property-option">
                    <img
                      className="property-option__image"
                      loading="lazy"
                      src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2021/12/home-lease.jpg"
                      alt=""
                    />
                    <span className="property-option__view">View</span>
                    <div className="property-option__details">
                      <p className="title">Properties for lease</p>
                      <div className="copy">
                        Explore our exciting range of prestige properties for
                        lease across the Gold Coast.
                      </div>
                    </div>
                    <a className="property-option__link" href="/lease/"></a>
                  </div>
                  {/* 
                <div className="property-option"><img className="property-option__image" loading="lazy"
                    src="https://kollosche-1bfb7.kxcdn.com/wp-content/uploads/2022/03/Website-Home-Page-Banners-.png"
                    alt=""/><span className="property-option__view">View</span>
                  <div className="property-option__details">
                    <p className="title">Recently sold</p>
                    <div className="copy">See the latest residential real estate sales results in your Gold Coast suburb.
                    </div>
                  </div><a className="property-option__link" href="/sold/"></a>
                </div> */}
                </div>
              </div>
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
                    <p className="value">93%</p>
                    <p className="label">
                      Highest list to
                      <br />
                      sell rate in Hawthorn
                    </p>
                  </div>
                  <div className="business-data__item">
                    <p className="value">$304M</p>
                    <p className="label">
                      Total value
                      <br />
                      of property sold
                    </p>
                  </div>
                  <div className="business-data__item">
                    <p className="value">$3.16M</p>
                    <p className="label">
                      Average
                      <br />
                      Sale Price
                    </p>
                  </div>
                  {/* <div className="business-data__item">
                  <p className="value">$42M</p>
                  <p className="label">Highest<br/>
                    Record Sale</p>
                </div>
                <div className="business-data__item">
                  <p className="value">5.0</p>
                  <p className="label">Average<br/>
                    Client Rating</p>
                </div> */}
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
              <h2>THE PROOF</h2>
            </div>

            <div className="testimonials">
              <TestimonialCard></TestimonialCard>
              <TestimonialCard></TestimonialCard>
              <TestimonialCard></TestimonialCard>
            </div>
          
        
          </section>
               

              
          <section className="blog-section">
    
          <div className="testimonials-heading">
              <h2>LATEST INSIGHTS</h2>
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
                    Address: 130 AUBURN ROAD, HAWTHORN, 3122
                    <br />
                    <a href="mailto:CONTACT@ANTONZHOUK.COM.AU">
                      E-mail: CONTACT@ANTONZHOUK.COM.AU
                    </a>
                    <br />
                    Phone: <a href="tel:03 9815 1124">03 9815 1124</a>
                    <br />
                    <a>Terms and Conditions’</a>
                    <a>‘Privacy Policy</a>
                  </p>
                </div>
              </div>

              <div className="footer__col">
                <h4 className="addHover">Buy</h4>
                <h4 className="addHover">Sell</h4>
                <h4 className="addHover">Rent</h4>
              </div>
              <div className="footer__col">
                <h4 className="">About</h4>
                <ul className="">
                  <li>
                    <a href="/about-us/">About Us</a>
                  </li>

                  <li>
                    <a href="/careers/">Team</a>
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
                      to="https://www.linkedin.com//"
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      LinkedIn
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
                      to="https://www.facebook.com/"
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      Facebook
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
            <ul className="social">
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
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
