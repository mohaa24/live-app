import {  useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'

import "react-responsive-carousel/lib/styles/carousel.min.css";


export const Layout = ({ children }) => {
  const router = useRouter();
  const [nav, setNav] = useState(
    router.pathname.toLocaleLowerCase().includes("buy") ||
      router.pathname.toLocaleLowerCase().includes("sold") ||
      router.pathname.toLocaleLowerCase().includes("lease") ||
      router.pathname.toLocaleLowerCase().includes("blog") ||
      router.pathname.toLocaleLowerCase().includes("post")
  );
  const[mobileNav, setMobileNav] =useState(false)

  const changeNavState = () => {
    if (window.scrollY > 10) {
      setNav(true);
    } else {
      if (
        !router.pathname.toLocaleLowerCase().includes("buy") &&
        !router.pathname.toLocaleLowerCase().includes("sold") &&
        !router.pathname.toLocaleLowerCase().includes("blog") &&
        !router.pathname.toLocaleLowerCase().includes("post")
      ) {
        setNav(false);
      }
    }
  };

  useEffect(()=>{
    if (
      router.pathname.toLocaleLowerCase().includes("buy") ||
      router.pathname.toLocaleLowerCase().includes("sold") ||
      router.pathname.toLocaleLowerCase().includes("lease") ||
      router.pathname.toLocaleLowerCase().includes("blog") ||
      router.pathname.toLocaleLowerCase().includes("post")
    ) {
      setNav(true);
    }
      
  })

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavState);
    console.log(router.pathname.toLocaleLowerCase().includes("buy"));
  }

  const flipBurger = () =>{
    if(mobileNav){
          document.getElementById("burger").classList.remove("active");
          setMobileNav(false);
          document
            .getElementById("mobileMenu")
            .classList.remove("off-canvas--active");

    }else{
          document.getElementById("burger").classList.add("active");
          setMobileNav(true);
          document
            .getElementById("mobileMenu")
            .classList.add("off-canvas--active");


    }
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
                <Link href="/buy/">Buy</Link>
              </li>

              <li>
                <Link href="/sold/">Sell</Link>
              </li>
              <li>
                <Link href="/lease/">Rent</Link>
              </li>

              <li>
                <Link href="/about/">About</Link>
              </li>
              <li>
                <Link href="/blog/">Blog</Link>
              </li>
              <li>
                <Link href="/contact/">Contact</Link>
              </li>
              <li>
                <Link className="-icon" href="/buy/">
                  <svg
                    className="header__search"
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
                </Link>
              </li>

              <li>
                <button
                  className="header__hamburger"
                  id="burger"
                  type="button"
                  onClick={() => {
                    flipBurger();
                  }}
                >
                  <span className="lines"></span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="off-canvas" id="mobileMenu">
        <div className="off-canvas__inner">
          <nav className="off-canvas__nav">
            <ul>
              <li>
                <Link href={"/about"}>
                  <button type="button" onClick={()=>{flipBurger()}} className="">
                    Buy
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <button type="button" className="">
                    Lease
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <button type="button" className="">
                    Sold
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <button type="button" className="">
                    About
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <button type="button" className="">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
            <div className="off-canvas__social">
              <p>
                <a
                  className="phone"
                  to="tel:03 9815 1124"
                  href="tel:"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  03 9815 1124
                </a>
              </p>
              <ul>
                <li>
                  <a
                    to="https://www.linkedin.com/company/"
                    href="https://www.linkedin.com/company/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <svg
                      width="15px"
                      height="16px"
                      viewBox="0 0 15 16"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g transform="translate(-214.000000, -650.000000)">
                          <g transform="translate(82.000000, 650.000000)">
                            <g
                              transform="translate(132.132645, 0.727273)"
                              fill="#FFFFFF"
                            >
                              <path d="M0.366886171,4.66408224 L3.20191568,4.66408224 L3.20191568,14.5445232 L0.366886171,14.5445232 L0.366886171,4.66408224 Z M1.71213547,3.4282122 L1.69161037,3.4282122 C0.665355341,3.4282122 1.21115239e-15,2.67290655 1.21115239e-15,1.71643442 C1.21115239e-15,0.740404428 0.685025229,0 1.73180535,0 C2.77773027,0 3.42085008,0.738541776 3.44137518,1.71364044 C3.44137518,2.67011257 2.77773027,3.4282122 1.71213547,3.4282122 L1.71213547,3.4282122 Z M14.5454545,14.5454545 L11.3307107,14.5454545 L11.3307107,9.43154169 C11.3307107,8.09322577 10.8278457,7.18052597 9.72205593,7.18052597 C8.87625075,7.18052597 8.40588386,7.79613267 8.18694946,8.39125019 C8.10484905,8.60359259 8.11767724,8.90068569 8.11767724,9.19871011 L8.11767724,14.5454545 L4.93286582,14.5454545 C4.93286582,14.5454545 4.97391602,5.48737471 4.93286582,4.66408224 L8.11767724,4.66408224 L8.11767724,6.21474057 C8.305824,5.536735 9.3235269,4.56908695 10.9475755,4.56908695 C12.9624562,4.56908695 14.5454545,5.99122225 14.5454545,9.05062923 L14.5454545,14.5454545 L14.5454545,14.5454545 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    to="https://www.facebook.com/"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <svg
                      width="9px"
                      height="19px"
                      viewBox="0 0 9 19"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          transform="translate(-840.000000, -375.000000)"
                          fill="#FFFFFF"
                        >
                          <g transform="translate(840.000000, 375.000000)">
                            <path
                              d="M5.86793103,5.43016393 L5.86793103,3.96819672 C5.86793103,3.28196721 6.33862069,3.10295082 6.71517241,3.10295082 L8.84896552,3.10295082 L8.84896552,-5.32907052e-15 L5.89931034,-5.32907052e-15 C2.63586207,-5.32907052e-15 1.91413793,2.29737705 1.91413793,3.78918033 L1.91413793,5.43016393 L3.8191672e-14,5.43016393 L3.8191672e-14,7.60819672 L3.8191672e-14,9.04032787 L1.91413793,9.04032787 L1.91413793,18.0806557 L5.71103448,18.0806557 L5.71103448,9.04032787 L8.53517241,9.04032787 L8.66068966,7.60819672 L8.88034483,5.40032787 L5.86793103,5.40032787 L5.86793103,5.43016393 Z"
                              id="Path"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    to="https://www.instagram.com/"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <svg
                      width="19px"
                      height="19px"
                      viewBox="0 0 19 19"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          transform="translate(-1313.000000, -66.000000)"
                          fill="#FFFFFF"
                        >
                          <g
                            id="/i/instagram"
                            transform="translate(1313.000000, 66.000000)"
                          >
                            <path d="M5.27741655,-3.55271368e-15 L13.008104,-3.55271368e-15 C15.9111902,-3.55271368e-15 18.2851777,2.34461691 18.2851777,5.20890427 L18.2851777,12.918678 C18.2851777,15.7836511 15.9111902,18.1275823 13.008104,18.1275823 L5.27741655,18.1275823 C2.37433032,18.1275823 0,15.7836511 0,12.918678 L0,5.20890427 C0,2.34461691 2.37430175,-3.55271368e-15 5.27741655,-3.55271368e-15 Z M9.09333313,4.16956335 C11.9144218,4.16956335 14.2036974,6.45883902 14.2036974,9.27992766 C14.2036974,12.1013591 11.9144218,14.390292 9.09333313,14.390292 C6.2715588,14.390292 3.98262598,12.1013591 3.98262598,9.27992766 C3.98262598,6.45883902 6.2715588,4.16956335 9.09333313,4.16956335 Z M9.09333313,5.89562698 C10.9614783,5.89562698 12.4776338,7.41146821 12.4776338,9.27992766 C12.4776338,11.1483871 10.9614497,12.6645712 9.09333313,12.6645712 C7.22453083,12.6645712 5.70868961,11.1484157 5.70868961,9.27992766 C5.70868961,7.41146821 7.22453083,5.89562698 9.09333313,5.89562698 Z M14.0373309,3.46126985 C14.4956032,3.46126985 14.8671351,3.8328018 14.8671351,4.29073122 C14.8671351,4.74900349 14.4956032,5.12053544 14.0373309,5.12053544 C13.5794015,5.12053544 13.2078695,4.74900349 13.2078695,4.29073122 C13.2078695,3.8328018 13.5794015,3.46126985 14.0373309,3.46126985 L14.0373309,3.46126985 Z M5.9091123,1.48075654 L12.3770653,1.48075654 C14.8057083,1.48075654 16.7919643,3.45721283 16.7919643,5.87239909 L16.7919643,12.3727226 C16.7919643,14.7878517 14.8057369,16.7639937 12.3770653,16.7639937 L5.9091123,16.7639937 C3.48046929,16.7639937 1.49389901,14.7878517 1.49389901,12.372694 L1.49389901,5.87234195 C1.49389901,3.45721283 3.48046929,1.48075654 5.9091123,1.48075654 Z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
         
                <li>
                  <a
                    to="https://www.youtube.com/"
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <svg
                      width="23px"
                      height="16px"
                      viewBox="0 0 23 16"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          transform="translate(-1355.000000, -67.000000)"
                          fill="#FFFFFF"
                        >
                          <g
                            id="/i/youtube"
                            transform="translate(1355.000000, 67.000000)"
                          >
                            <path d="M22.6349206,11.8191726 L22.6349206,3.84398525 C22.6349206,3.84398525 22.6349206,-2.61778903e-15 18.7342296,-2.61778903e-15 L3.89936015,-2.61778903e-15 C3.89936015,-2.61778903e-15 0,-2.61778903e-15 0,3.84398525 L0,11.8191726 C0,11.8191726 0,15.6631579 3.89936015,15.6631579 L18.7342296,15.6631579 C18.7342296,15.6631579 22.6349206,15.6631579 22.6349206,11.8191726 M15.7118928,7.84272664 L8.30177769,12.1313079 L8.30177769,3.55283386 L15.7118928,7.84272664"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="off-canvas__sub-nav "></div>
          <button
            className="header__off-canvas-close active"
            type="button"
          ></button>
        </div>
      </div>

      <div className="container"> {children}</div>

      <footer className="footer">
        <div className="footer__top">
          <div className="footer__inner">
            <div className="footer__cols">
              <div className="footer__col">
                <div className="footer__logo">
                  <Link aria-current="page" title="A__Z" className="" href="/">
                    <img
                      className="logo-img footer"
                      src="http://shifaza21.sg-host.com/wp-content/uploads/2022/07/0263_ANTONZHOUK_DEVICE.png"
                    ></img>
                  </Link>
                </div>
                <div className="footer__address">
                  <p>
                    130 Auburn Road,
                    <br></br>
                    Hawthorn, VIC 3122
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
