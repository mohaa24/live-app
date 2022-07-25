import { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const TestimonialCard = () => {
  const [activeReview, setActiveReview] = useState({
    name: "N. WILSON",
    review: `Anton communicated with both ourselves and potential buyers with
    clarity and diligence, leaving no stone unturned. His dedication,
    knowledge and willingness to do things a little differently were
    much appreciated.`,
  });
  const [num, setNum] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "R. Lewis",
      review: `Anton, thanks for a great job selling our Kew property. We never felt pressured but could see the work you and your team were putting in. The results you achieved were at the top of end of our expectations and the experience was great.`,
    },

    {
      name: "N. WILSON",
      review: `Anton communicated with both ourselves and potential buyers with
      clarity and diligence, leaving no stone unturned. His dedication,
      knowledge and willingness to do things a little differently were
      much appreciated.`,
    },
  ];

  const arrowStyles = {
    zIndex: 2,
    cursor: "pointer",
    background: "none",
    border: "none",
  };

  const next = () => {
    setCurrentSlide((prev)=>{return prev+1})
  };

  const prev = () => {
    setCurrentSlide((prev) => {
      return prev -1;
    });

  };

  let carousal = reviews.map((i) => {
    <>
      {reviews && (
        <div>
          {/* <p className="legend">Legend 14</p> */}
          <h1>{i.review}</h1>
          <h3>{i.name}</h3>
        </div>
      )}
    </>;
  });

  return (
    <>
      <div className="TestimonielSection">
        <div className="leftBlock testimonialContent">
          {/* <h1>The Proof</h1> */}
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
              onClick={next}
              title={""}
              style={{ ...arrowStyles, right: 15 }}
            >
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAzNCA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJEZXNrdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQUswMDUtLS1XZWJzaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzI3LjAwMDAwMCwgLTE1NjQuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc0NC4wMDAwMDAsIDE1NjguNTAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC03NDQuMDAwMDAwLCAtMTU2OC41MDAwMDApICIgcG9pbnRzPSI3NDguNSAxNTc5Ljk2MjI4IDc0NC4zOTE2NjYgMTU4NS41IDczOS41IDE1NzkuOTYyMjggNzQzLjQ4NjQ4NCAxNTc5Ljk2MjI4IDc0My40ODY0ODQgMTU1MS41IDc0NC45MzUxODQgMTU1MS41IDc0NC45MzUxODQgMTU3OS45NjIyOCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                alt="next gallery item"
              />
            </button>
          </div>
        </div>
        <div className="rightBlock">
          <Carousel
            selectedItem={currentSlide}
            autoPlay={true}
            showArrows={true}
            showIndicators={true}
            showThumbs={false}
            transitionTime={500}
            infiniteLoop={true}
          >
            <div className="testimonialContent">
              {/* <p className="legend">Legend 14</p> */}
              <h1>
                van has guided me through opening my own agency. He provides
                outstanding advice and is always there to answer any questions I
                may have. I will continue to use Bresic Coaching for many years
                to come.
              </h1>
              <h3>Alison Birdsall</h3>
            </div>
            <div className="testimonialContent">
              <h1>
                I was introduced to Anton Zhouk through my buyer agent to rent
                my property, and they did not disappoint me at all! They where
                very open,realistic, prompt and trust worthy- and wasted no time
                to get my property up to scratch and find a decent tenant.I was
                especially impressed with Nicole, the head of property
                management for her professionalism and sincere advice around
                this time. I have no hesitancy in recommending them to any of my
                friends and family for a reliable and honest real estate agent!
              </h1>
              <h3 className="">Rupesh</h3>
            </div>
            <div className="testimonialContent">
              <h1>
                Anton, thanks for a great job selling our Kew property. We never
                felt pressured but could see the work you and your team were
                putting in. The results you achieved were at the top end of our
                expectations and the experience was great.
              </h1>
              <h3 className="">R.Lewis</h3>
            </div>
            <div className="testimonialContent">
              {/* <p className="legend">Legend 14</p> */}
              <h1>
                I was introduced to Anton Zhouk through my buyer agent to rent
                my property, and they did not disappoint me at all! They were
                very open, realistic, prompt and trustworthy and wasted no time
                to get my property up to scratch and find a decent tenant. I was
                especially impressed with Nicole, the head of property
                management for her professionalism and sincere advice around
                this time. I have no hesitancy in recommending them to any of my
                friends and family for a reliable and honest real estate agent!
              </h1>
              <h3>Rupesh</h3>
            </div>
            <div className="testimonialContent">
              {/* <p className="legend">Legend 14</p> */}
              <h1>
                Anton Zhouk have been amazing to work with from the start. The
                application process was quick Nicole was easy to talk to through
                every step. Since living in our new house, Nicole has been easy
                to contact and we always know she will help us, no matter how
                big or small the question is. Renting can be a difficult
                process, but Anton Zhouk have made it pretty pain-free.
              </h1>
              <h3>Emma and Jess</h3>
            </div>
            <div className="testimonialContent">
              {/* <p className="legend">Legend 14</p> */}
              <h1>
                Anton communicated with both ourselves and buyers with clarity
                and diligence, leaving no stone unturned. His dedication,
                knowledge and willingness to do things a little differently were
                much appreciated.
              </h1>
              <h3>N. Wilson</h3>
            </div>
          </Carousel>
        </div>
      </div>

      {/* <div className=" testimonials__inner">
        <div className="testimonials__content">
          <p id='testimonialText'>
            {activeReview.review}            
          </p>
        </div>
        <ul className="testimonials__stars">
          <li>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNDg2cHgiIHZpZXdCb3g9IjAgMCA1MDAgNDg2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPm5vdW5fU3Rhcl8xMDc2MzYxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Im5vdW5fU3Rhcl8xMDc2MzYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIC0xLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43ODU1MjUsIDAuODQ0NDIwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUwLjM5NjczLDAuNjU1NTYxOTg3IEMyNDcuNTI2MTY3LDAuNTg0Mzk2MzU4IDI0NC44ODExMzcsMi4yMzU1MDA2MiAyNDMuNjQyODMsNC44NzM5IEwxNzEuNzk1MTksMTU4LjA1NDI2IEw2LjU0MTIyLDE4MC4zMDczNiBDMy43NjAwMzc1MywxODAuNjgyNDE3IDEuNDM3NjcxNSwxODIuNjUxMDE2IDAuNTcwODI4MzU0LDE4NS4zNjgyOCBDLTAuMjk2MDE0Nzk1LDE4OC4wODU1NDQgMC40NDY4MDc5MzUsMTkxLjA2ODI4NSAyLjQ4MDQ5NCwxOTMuMDM2MzggTDEyMy4zMjk2NCwzMDkuOTU5MjEgTDkzLjA0NDg4LDQ3Ni44OTMxNyBDOTIuNTM1OTM3Niw0NzkuNzAyNTE1IDkzLjY1NjU5NjgsNDgyLjU1OTgxOCA5NS45MjU5ODYyLDQ4NC4yMzkwMTggQzk4LjE5NTM3NTUsNDg1LjkxODIxOCAxMDEuMjEwMDQyLDQ4Ni4xMjA3ODUgMTAzLjY3NjQsNDg0Ljc1OTggTDI1MC4yMTM2Myw0MDMuODQxNzEgTDM5Ni43NTA4Niw0ODQuNzU5OCBDMzk5LjIxNzIxOCw0ODYuMTIwNzg1IDQwMi4yMzE4ODUsNDg1LjkxODIxOCA0MDQuNTAxMjc0LDQ4NC4yMzkwMTggQzQwNi43NzA2NjMsNDgyLjU1OTgxOCA0MDcuODkxMzIyLDQ3OS43MDI1MTUgNDA3LjM4MjM4LDQ3Ni44OTMxNyBMMzc3LjA5NzYxLDMwOS45NTkyMSBMNDk3Ljk0ODY3LDE5My4wMzYzOCBDNDk5Ljk4MjQ1LDE5MS4wNjgwMiA1MDAuNzI1MDc5LDE4OC4wODQ5MTEgNDk5Ljg1Nzc5LDE4NS4zNjc1MjkgQzQ5OC45OTA1MDEsMTgyLjY1MDE0OCA0OTYuNjY3NTQ0LDE4MC42ODE3OTEgNDkzLjg4NjAzLDE4MC4zMDczNiBMMzI4LjYzMjA2LDE1OC4wNTQyNiBMMjU2Ljc4NDQyLDQuODczOSBDMjU1LjYwMzE1NSwyLjM1NzAzNzg4IDI1My4xMzUwNjEsMC43MjgwNTU0NiAyNTAuMzk2NzMsMC42NTU1NjE5ODcgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></img>
          </li>
          <li>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNDg2cHgiIHZpZXdCb3g9IjAgMCA1MDAgNDg2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPm5vdW5fU3Rhcl8xMDc2MzYxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Im5vdW5fU3Rhcl8xMDc2MzYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIC0xLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43ODU1MjUsIDAuODQ0NDIwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUwLjM5NjczLDAuNjU1NTYxOTg3IEMyNDcuNTI2MTY3LDAuNTg0Mzk2MzU4IDI0NC44ODExMzcsMi4yMzU1MDA2MiAyNDMuNjQyODMsNC44NzM5IEwxNzEuNzk1MTksMTU4LjA1NDI2IEw2LjU0MTIyLDE4MC4zMDczNiBDMy43NjAwMzc1MywxODAuNjgyNDE3IDEuNDM3NjcxNSwxODIuNjUxMDE2IDAuNTcwODI4MzU0LDE4NS4zNjgyOCBDLTAuMjk2MDE0Nzk1LDE4OC4wODU1NDQgMC40NDY4MDc5MzUsMTkxLjA2ODI4NSAyLjQ4MDQ5NCwxOTMuMDM2MzggTDEyMy4zMjk2NCwzMDkuOTU5MjEgTDkzLjA0NDg4LDQ3Ni44OTMxNyBDOTIuNTM1OTM3Niw0NzkuNzAyNTE1IDkzLjY1NjU5NjgsNDgyLjU1OTgxOCA5NS45MjU5ODYyLDQ4NC4yMzkwMTggQzk4LjE5NTM3NTUsNDg1LjkxODIxOCAxMDEuMjEwMDQyLDQ4Ni4xMjA3ODUgMTAzLjY3NjQsNDg0Ljc1OTggTDI1MC4yMTM2Myw0MDMuODQxNzEgTDM5Ni43NTA4Niw0ODQuNzU5OCBDMzk5LjIxNzIxOCw0ODYuMTIwNzg1IDQwMi4yMzE4ODUsNDg1LjkxODIxOCA0MDQuNTAxMjc0LDQ4NC4yMzkwMTggQzQwNi43NzA2NjMsNDgyLjU1OTgxOCA0MDcuODkxMzIyLDQ3OS43MDI1MTUgNDA3LjM4MjM4LDQ3Ni44OTMxNyBMMzc3LjA5NzYxLDMwOS45NTkyMSBMNDk3Ljk0ODY3LDE5My4wMzYzOCBDNDk5Ljk4MjQ1LDE5MS4wNjgwMiA1MDAuNzI1MDc5LDE4OC4wODQ5MTEgNDk5Ljg1Nzc5LDE4NS4zNjc1MjkgQzQ5OC45OTA1MDEsMTgyLjY1MDE0OCA0OTYuNjY3NTQ0LDE4MC42ODE3OTEgNDkzLjg4NjAzLDE4MC4zMDczNiBMMzI4LjYzMjA2LDE1OC4wNTQyNiBMMjU2Ljc4NDQyLDQuODczOSBDMjU1LjYwMzE1NSwyLjM1NzAzNzg4IDI1My4xMzUwNjEsMC43MjgwNTU0NiAyNTAuMzk2NzMsMC42NTU1NjE5ODcgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></img>
          </li>
          <li>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNDg2cHgiIHZpZXdCb3g9IjAgMCA1MDAgNDg2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPm5vdW5fU3Rhcl8xMDc2MzYxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Im5vdW5fU3Rhcl8xMDc2MzYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIC0xLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43ODU1MjUsIDAuODQ0NDIwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUwLjM5NjczLDAuNjU1NTYxOTg3IEMyNDcuNTI2MTY3LDAuNTg0Mzk2MzU4IDI0NC44ODExMzcsMi4yMzU1MDA2MiAyNDMuNjQyODMsNC44NzM5IEwxNzEuNzk1MTksMTU4LjA1NDI2IEw2LjU0MTIyLDE4MC4zMDczNiBDMy43NjAwMzc1MywxODAuNjgyNDE3IDEuNDM3NjcxNSwxODIuNjUxMDE2IDAuNTcwODI4MzU0LDE4NS4zNjgyOCBDLTAuMjk2MDE0Nzk1LDE4OC4wODU1NDQgMC40NDY4MDc5MzUsMTkxLjA2ODI4NSAyLjQ4MDQ5NCwxOTMuMDM2MzggTDEyMy4zMjk2NCwzMDkuOTU5MjEgTDkzLjA0NDg4LDQ3Ni44OTMxNyBDOTIuNTM1OTM3Niw0NzkuNzAyNTE1IDkzLjY1NjU5NjgsNDgyLjU1OTgxOCA5NS45MjU5ODYyLDQ4NC4yMzkwMTggQzk4LjE5NTM3NTUsNDg1LjkxODIxOCAxMDEuMjEwMDQyLDQ4Ni4xMjA3ODUgMTAzLjY3NjQsNDg0Ljc1OTggTDI1MC4yMTM2Myw0MDMuODQxNzEgTDM5Ni43NTA4Niw0ODQuNzU5OCBDMzk5LjIxNzIxOCw0ODYuMTIwNzg1IDQwMi4yMzE4ODUsNDg1LjkxODIxOCA0MDQuNTAxMjc0LDQ4NC4yMzkwMTggQzQwNi43NzA2NjMsNDgyLjU1OTgxOCA0MDcuODkxMzIyLDQ3OS43MDI1MTUgNDA3LjM4MjM4LDQ3Ni44OTMxNyBMMzc3LjA5NzYxLDMwOS45NTkyMSBMNDk3Ljk0ODY3LDE5My4wMzYzOCBDNDk5Ljk4MjQ1LDE5MS4wNjgwMiA1MDAuNzI1MDc5LDE4OC4wODQ5MTEgNDk5Ljg1Nzc5LDE4NS4zNjc1MjkgQzQ5OC45OTA1MDEsMTgyLjY1MDE0OCA0OTYuNjY3NTQ0LDE4MC42ODE3OTEgNDkzLjg4NjAzLDE4MC4zMDczNiBMMzI4LjYzMjA2LDE1OC4wNTQyNiBMMjU2Ljc4NDQyLDQuODczOSBDMjU1LjYwMzE1NSwyLjM1NzAzNzg4IDI1My4xMzUwNjEsMC43MjgwNTU0NiAyNTAuMzk2NzMsMC42NTU1NjE5ODcgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></img>
          </li>
          <li>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNDg2cHgiIHZpZXdCb3g9IjAgMCA1MDAgNDg2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPm5vdW5fU3Rhcl8xMDc2MzYxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Im5vdW5fU3Rhcl8xMDc2MzYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIC0xLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43ODU1MjUsIDAuODQ0NDIwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUwLjM5NjczLDAuNjU1NTYxOTg3IEMyNDcuNTI2MTY3LDAuNTg0Mzk2MzU4IDI0NC44ODExMzcsMi4yMzU1MDA2MiAyNDMuNjQyODMsNC44NzM5IEwxNzEuNzk1MTksMTU4LjA1NDI2IEw2LjU0MTIyLDE4MC4zMDczNiBDMy43NjAwMzc1MywxODAuNjgyNDE3IDEuNDM3NjcxNSwxODIuNjUxMDE2IDAuNTcwODI4MzU0LDE4NS4zNjgyOCBDLTAuMjk2MDE0Nzk1LDE4OC4wODU1NDQgMC40NDY4MDc5MzUsMTkxLjA2ODI4NSAyLjQ4MDQ5NCwxOTMuMDM2MzggTDEyMy4zMjk2NCwzMDkuOTU5MjEgTDkzLjA0NDg4LDQ3Ni44OTMxNyBDOTIuNTM1OTM3Niw0NzkuNzAyNTE1IDkzLjY1NjU5NjgsNDgyLjU1OTgxOCA5NS45MjU5ODYyLDQ4NC4yMzkwMTggQzk4LjE5NTM3NTUsNDg1LjkxODIxOCAxMDEuMjEwMDQyLDQ4Ni4xMjA3ODUgMTAzLjY3NjQsNDg0Ljc1OTggTDI1MC4yMTM2Myw0MDMuODQxNzEgTDM5Ni43NTA4Niw0ODQuNzU5OCBDMzk5LjIxNzIxOCw0ODYuMTIwNzg1IDQwMi4yMzE4ODUsNDg1LjkxODIxOCA0MDQuNTAxMjc0LDQ4NC4yMzkwMTggQzQwNi43NzA2NjMsNDgyLjU1OTgxOCA0MDcuODkxMzIyLDQ3OS43MDI1MTUgNDA3LjM4MjM4LDQ3Ni44OTMxNyBMMzc3LjA5NzYxLDMwOS45NTkyMSBMNDk3Ljk0ODY3LDE5My4wMzYzOCBDNDk5Ljk4MjQ1LDE5MS4wNjgwMiA1MDAuNzI1MDc5LDE4OC4wODQ5MTEgNDk5Ljg1Nzc5LDE4NS4zNjc1MjkgQzQ5OC45OTA1MDEsMTgyLjY1MDE0OCA0OTYuNjY3NTQ0LDE4MC42ODE3OTEgNDkzLjg4NjAzLDE4MC4zMDczNiBMMzI4LjYzMjA2LDE1OC4wNTQyNiBMMjU2Ljc4NDQyLDQuODczOSBDMjU1LjYwMzE1NSwyLjM1NzAzNzg4IDI1My4xMzUwNjEsMC43MjgwNTU0NiAyNTAuMzk2NzMsMC42NTU1NjE5ODcgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></img>
          </li>
          <li>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNDg2cHgiIHZpZXdCb3g9IjAgMCA1MDAgNDg2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPm5vdW5fU3Rhcl8xMDc2MzYxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Im5vdW5fU3Rhcl8xMDc2MzYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIC0xLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43ODU1MjUsIDAuODQ0NDIwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUwLjM5NjczLDAuNjU1NTYxOTg3IEMyNDcuNTI2MTY3LDAuNTg0Mzk2MzU4IDI0NC44ODExMzcsMi4yMzU1MDA2MiAyNDMuNjQyODMsNC44NzM5IEwxNzEuNzk1MTksMTU4LjA1NDI2IEw2LjU0MTIyLDE4MC4zMDczNiBDMy43NjAwMzc1MywxODAuNjgyNDE3IDEuNDM3NjcxNSwxODIuNjUxMDE2IDAuNTcwODI4MzU0LDE4NS4zNjgyOCBDLTAuMjk2MDE0Nzk1LDE4OC4wODU1NDQgMC40NDY4MDc5MzUsMTkxLjA2ODI4NSAyLjQ4MDQ5NCwxOTMuMDM2MzggTDEyMy4zMjk2NCwzMDkuOTU5MjEgTDkzLjA0NDg4LDQ3Ni44OTMxNyBDOTIuNTM1OTM3Niw0NzkuNzAyNTE1IDkzLjY1NjU5NjgsNDgyLjU1OTgxOCA5NS45MjU5ODYyLDQ4NC4yMzkwMTggQzk4LjE5NTM3NTUsNDg1LjkxODIxOCAxMDEuMjEwMDQyLDQ4Ni4xMjA3ODUgMTAzLjY3NjQsNDg0Ljc1OTggTDI1MC4yMTM2Myw0MDMuODQxNzEgTDM5Ni43NTA4Niw0ODQuNzU5OCBDMzk5LjIxNzIxOCw0ODYuMTIwNzg1IDQwMi4yMzE4ODUsNDg1LjkxODIxOCA0MDQuNTAxMjc0LDQ4NC4yMzkwMTggQzQwNi43NzA2NjMsNDgyLjU1OTgxOCA0MDcuODkxMzIyLDQ3OS43MDI1MTUgNDA3LjM4MjM4LDQ3Ni44OTMxNyBMMzc3LjA5NzYxLDMwOS45NTkyMSBMNDk3Ljk0ODY3LDE5My4wMzYzOCBDNDk5Ljk4MjQ1LDE5MS4wNjgwMiA1MDAuNzI1MDc5LDE4OC4wODQ5MTEgNDk5Ljg1Nzc5LDE4NS4zNjc1MjkgQzQ5OC45OTA1MDEsMTgyLjY1MDE0OCA0OTYuNjY3NTQ0LDE4MC42ODE3OTEgNDkzLjg4NjAzLDE4MC4zMDczNiBMMzI4LjYzMjA2LDE1OC4wNTQyNiBMMjU2Ljc4NDQyLDQuODczOSBDMjU1LjYwMzE1NSwyLjM1NzAzNzg4IDI1My4xMzUwNjEsMC43MjgwNTU0NiAyNTAuMzk2NzMsMC42NTU1NjE5ODcgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></img>
          </li>
        </ul>
        <span> {activeReview.name}</span>
        <div className="controlContainer" >
          <div className="prevPointer">
            <img onClick={()=>{toggleReview()}}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAzNCA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPkZpbGwgMSBDb3B5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkRlc2t0b3AiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBSzAwNS0tLVdlYnNpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NzcuMDAwMDAwLCAtMTU2NC4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMS1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2OTQuMDAwMDAwLCAxNTY4LjUwMDAwMCkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTY5NC4wMDAwMDAsIC0xNTY4LjUwMDAwMCkgIiBwb2ludHM9IjY5OC41IDE1NzkuOTYyMjggNjk0LjM5MTY2NiAxNTg1LjUgNjg5LjUgMTU3OS45NjIyOCA2OTMuNDg2NDg0IDE1NzkuOTYyMjggNjkzLjQ4NjQ4NCAxNTUxLjUgNjk0LjkzNTE4NCAxNTUxLjUgNjk0LjkzNTE4NCAxNTc5Ljk2MjI4Ij48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
              alt="last gallery item"
            ></img>
          </div>

          <div className="nextPointer" onClick={()=>{toggleReview()}}>
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAzNCA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJEZXNrdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQUswMDUtLS1XZWJzaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzI3LjAwMDAwMCwgLTE1NjQuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc0NC4wMDAwMDAsIDE1NjguNTAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC03NDQuMDAwMDAwLCAtMTU2OC41MDAwMDApICIgcG9pbnRzPSI3NDguNSAxNTc5Ljk2MjI4IDc0NC4zOTE2NjYgMTU4NS41IDczOS41IDE1NzkuOTYyMjggNzQzLjQ4NjQ4NCAxNTc5Ljk2MjI4IDc0My40ODY0ODQgMTU1MS41IDc0NC45MzUxODQgMTU1MS41IDc0NC45MzUxODQgMTU3OS45NjIyOCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
              alt="next gallery item"
            ></img>
          </div>
        </div>
      </div> */}
    </>
  );
};
