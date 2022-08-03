import { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import Flickity from "react-flickity-component";

export const ContentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  let flkty = null;

  useEffect(() => {
    if (flkty) {
      flkty.on("change", (index) => {
        setCurrentSlide(index);
        console.log(index);
      });
    }
  });

  let map = [
    {
      title: "Low Property Manager/Portfolio Ratio.",
      content:
        "We will always ensure that the number of properties each Property Manager is managing at any given time are kept lower to make sure we continue to provide our clients with the highest level of personalised service. In addition, having systems and processes in place together with ample back end support for our Property Managers ensures that our clients are being looked after and nothing slips through the cracks.",
      image:
        "https://www.antonzhouk.com.au/static/toa-heftiba-FV3GConVSss-unsplash-5904907844ce90960ceda17f961d4a13.jpg",
    },
    {
      title: "Personalised Service.",
      content:
        "For us it’s not a one size fits all approach. Every client has a preferred method of communication and desired level of involvement in their investment home.  Whether you are a “set and forget” client or someone who likes to be heavily involved, we will tailor our service to meet your individual expectations.",
      image:
        "https://www.antonzhouk.com.au/static/jaye-haych-7tkDoo2L_Eg-unsplash-e8c4d8eea1387eac2f18e494dacf2b4d.jpg",
    },
    {
      title: "Honest, Reliable & Prompt Communication.",
      content:
        "Communication that is prompt, honest and reliable is the back bone to any successful relationship between owners, tenants, Property Mangers & tradespeople relating to your investment home.  You can be assured that any advice we provide to you is well considered, honest and informed.  With us, you won’t have to wait days for a returned phone call or email. Give us try.",
      image:
        "https://www.antonzhouk.com.au/static/christin-hume-Hcfwew744z4-unsplash-cae1c7833201e159dce1fe9e19927774.jpg",
    },
    {
      title: "Available 7 Days A Week.",
      content:
        "We can always be contacted via phone or email 7 days a week to ensure that your queries are answered promptly. Also, most tenants aren't in the market for long before securing their next rental property, so we want to make sure if there is an opportunity to lease your property out faster for the best possible return, we will be the ones to do this for you.",
      image:
        "https://www.antonzhouk.com.au/static/tom-rumble-7lvzopTxjOU-unsplash-07a341e0a56e29789087c7a693c8f905.jpg",
    },
    {
      title: "24/7 Landlord & Tenant Portal Access.",
      content: `Having peace of mind is key and having all the information regarding your property tenancy at your fingertips 24/7 helps you achieve this:

• Access to property financial information
• Statements
• Inspection reports
• Monitor maintenance jobs and much more.


`,
      image:
        "https://www.antonzhouk.com.au/static/thomas-lefebvre-gp8BLyaTaA0-unsplash-892cba24f69a71ea79bbf48cb0f09ab0.jpg",
    },
    {
      title: "25+ Years’ Property Management Experience.",
      content:
        "In changing times experience can make a massive difference in how different situations are handled. Having a team with over 25+ years’ experience in Property Management, our team is well equipped in dealing with some of the most difficult situations in the most professional and appropriate manner. The Residential Tenancies Act 1997 has over 250 pages of legislation, so experience matters to ensure that your investment is managed well, not just during the quiet times, but when the inevitable tricky situations arise.",
      image:
        "https://www.antonzhouk.com.au/static/hunters-race-MYbhN8KaaEc-unsplash-fbbfe625c1380d747449bbf6372995bd.jpg",
    },
  ];

  const arrowStyles = {
    zIndex: 2,
    cursor: "pointer",
    background: "none",
    border: "none",
  };

  const next = () => {
    if (currentSlide !== map.length - 1) {
      setCurrentSlide((prev) => {
        return prev + 1;
      });
    }
  };

  const prev = () => {
    if (currentSlide !== 0)
      setCurrentSlide((prev) => {
        return prev - 1;
      });
  };


  const slides = map.map((i) => {
    return (

        <div
          class="title-content-slider__wrap"
          tabindex="-1"
          
        >
          <div class="title-content-slider__content">
            <h2>Why A__Z?</h2>
            <p class="title-content-slider__count">
              0{currentSlide+1}. — 06.
            </p>
            <h4>{i.title}</h4>
            <p>
             {i.content}
            </p>
          </div>
          <div class="title-content-slider__image">
            <img src={i.image} />
          </div>
        </div>

    );
  });

  return (
    <>

        <div className="contentSliderContainer">
        <div className="contentSlider">
          <Carousel
            onChange={(i) => {
              setCurrentSlide(i);
              console.log(`index ${i}`);
            }}
            selectedItem={currentSlide}
            autoPlay={false}
            showIndicators={false}
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
             animationHandler='fade'
          >
            {slides && slides}
          </Carousel>
        </div>
 
      <div className="testomonialBottom">
        <div className="sideControls">
          <button
            type="button"
            onClick={prev}
            title={""}
            style={{ ...arrowStyles, left: 15 }}
          >
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAzNCA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPkZpbGwgMSBDb3B5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkRlc2t0b3AiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBSzAwNS0tLVdlYnNpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NzcuMDAwMDAwLCAtMTU2NC4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMS1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2OTQuMDAwMDAwLCAxNTY4LjUwMDAwMCkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTY5NC4wMDAwMDAsIC0xNTY4LjUwMDAwMCkgIiBwb2ludHM9IjY5OC41IDE1NzkuOTYyMjggNjk0LjM5MTY2NiAxNTg1LjUgNjg5LjUgMTU3OS45NjIyOCA2OTMuNDg2NDg0IDE1NzkuOTYyMjggNjkzLjQ4NjQ4NCAxNTUxLjUgNjk0LjkzNTE4NCAxNTUxLjUgNjk0LjkzNTE4NCAxNTc5Ljk2MjI4Ij48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
              alt="last gallery item"
            />
          </button>

          <button
            type="button"
            onClick={() => {
              next();
            }}
            title={""}
            style={{ ...arrowStyles, right: 15 }}
          >
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAzNCA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJEZXNrdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQUswMDUtLS1XZWJzaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzI3LjAwMDAwMCwgLTE1NjQuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc0NC4wMDAwMDAsIDE1NjguNTAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC03NDQuMDAwMDAwLCAtMTU2OC41MDAwMDApICIgcG9pbnRzPSI3NDguNSAxNTc5Ljk2MjI4IDc0NC4zOTE2NjYgMTU4NS41IDczOS41IDE1NzkuOTYyMjggNzQzLjQ4NjQ4NCAxNTc5Ljk2MjI4IDc0My40ODY0ODQgMTU1MS41IDc0NC45MzUxODQgMTU1MS41IDc0NC45MzUxODQgMTU3OS45NjIyOCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
              alt="next gallery item"
            />
          </button>
        </div>
        <h3 className="reviewerName">{''}</h3>
      </div>
      </div>
    </>
  );
};
