import { Children, useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";

export const Layout = ({ children }) => {
  const router = useRouter();
  const [nav, setNav] = useState(
    router.pathname.toLocaleLowerCase().includes("buy") ||
      router.pathname.toLocaleLowerCase().includes("sold")
  );

  const changeNavState = () => {
    if (window.scrollY > 10) {
      setNav(true);
    } else {
      if (
        !router.pathname.toLocaleLowerCase().includes("buy") &&
        !router.pathname.toLocaleLowerCase().includes("sold")
      ) {
        setNav(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavState);
    console.log(router.pathname.toLocaleLowerCase().includes("buy"));
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
              </li>

              <li>
                <a href="/sold/">Sell</a>
              </li>
              <li>
                <a href="/lease/">Rent</a>
              </li>

              <li>
                <a href="/about/">About</a>
              </li>
              <li>
                <a href="/blog/">Blog</a>
              </li>
              <li>
                <a href="/contact/">Contact</a>
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
      <div className="container"> {children}</div>

      <footer className="footer">
        <div className="footer__top">
          <div className="footer__inner">
            <div className="footer__cols">
              <div className="footer__col">
                <div className="footer__logo">
                  <a aria-current="page" title="A__Z" className="" href="/">
                    <img
                      className="logo-img footer"
                      src="http://shifaza21.sg-host.com/wp-content/uploads/2022/07/0263_ANTONZHOUK_DEVICE.png"
                    ></img>
                  </a>
                </div>
                <div className="footer__address">
                  <p>
                    130 AUBURN ROAD,
                    <br></br>
                    HAWTHORN, VIC 3122
                    <br />
                    <br />
                    <a
                      className="contact-mail"
                      href="mailto:CONTACT@ANTONZHOUK.COM.AU"
                    >
                      CONTACT@ANTONZHOUK.COM.AU
                    </a>
                    <br />
                    <a href="tel:03 9815 1124">03 9815 1124</a>
                    <br />
                  </p>
                </div>
              </div>

              <div className="footer__col">
                <h4>Services</h4>
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
              <div className="footer__col">
                <ul>
                  <li>
                    <a href="/terms-conditions/">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy-policy/">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-text">
            © 2022 Anton Zhouk Real Estate.
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
};
