import { useState } from "react";
import styled from "styled-components";

const Testimonials = styled.div`
   {
    padding: 40px 25px 25px;
    flex-grow: 1;
    flex-basis: 280px;
    max-width: 27vw;
    position: relative;
  }
`;


export const Header = () => {
  const [nav, setNav] = useState(false);

  const changeNavState = () => {
    console.log("scroll");
    if (window.scrollY > 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
if (typeof window !== "undefined"){
  window.addEventListener("scroll", changeNavState);
}
  return (
    <>
      <header className={nav ? "header active" : "header"} id="header">
        <div className="header__inner">
          <a aria-current="page" className="header__logo" href="/">
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
    </>
  );
};
