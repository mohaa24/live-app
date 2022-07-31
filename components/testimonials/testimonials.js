import { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import Flickity from "react-flickity-component";



export const TestimonialCard  = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  let flkty = null;

  useEffect(()=>{
    if(flkty){
      flkty.on("change", (index) => {
       setCurrentSlide(index);
       console.log(index)
      });
    }
  })


  let reviwer = [
    {
      name: "Rupesh",
      content: `I was introduced to Anton Zhouk through my buyer agent to rent
                  my property, and they did not disappoint me at all! They where
                  very open,realistic, prompt and trust worthy- and wasted no
                  time to get my property up to scratch and find a decent
                  tenant.I was especially impressed with Nicole, the head of
                  property management for her professionalism and sincere advice
                  around this time. I have no hesitancy in recommending them to
                  any of my friends and family for a reliable and honest real
                  estate agent!`,
    },
    {
      name: "R.Lewis",
      content: `Anton, thanks for a great job selling our Kew property. We
                  never felt pressured but could see the work you and your team
                  were putting in. The results you achieved were at the top end
                  of our expectations and the experience was great.`,
    },
    {
      name: "Emma and Jess",
      content: `I was introduced to Anton Zhouk through my buyer agent to rent
                  my property, and they did not disappoint me at all! They were
                  very open, realistic, prompt and trustworthy and wasted no
                  time to get my property up to scratch and find a decent
                  tenant. I was especially impressed with Nicole, the head of
                  property management for her professionalism and sincere advice
                  around this time. I have no hesitancy in recommending them to
                  any of my friends and family for a reliable and honest real
                  estate agent!`,
    },
    {
      name: "N. Wilson",
      content: `Anton Zhouk have been amazing to work with from the start. The
                  application process was quick Nicole was easy to talk to
                  through every step. Since living in our new house, Nicole has
                  been easy to contact and we always know she will help us, no
                  matter how big or small the question is. Renting can be a
                  difficult process, but Anton Zhouk have made it pretty
                  pain-free.`,
    },
    {
      name: "Rupesh",
      content: `  Anton communicated with both ourselves and buyers with clarity
                  and diligence, leaving no stone unturned. His dedication,
                  knowledge and willingness to do things a little differently
                  were much appreciated.`,
    },
    {
      name: "Rupesh",
      content: `I was introduced to Anton Zhouk through my buyer agent to rent
                  my property, and they did not disappoint me at all! They where
                  very open,realistic, prompt and trust worthy- and wasted no
                  time to get my property up to scratch and find a decent
                  tenant.I was especially impressed with Nicole, the head of
                  property management for her professionalism and sincere advice
                  around this time. I have no hesitancy in recommending them to
                  any of my friends and family for a reliable and honest real
                  estate agent!`,
    },
    {
      name: "R.Lewis",
      content: `Anton, thanks for a great job selling our Kew property. We
                  never felt pressured but could see the work you and your team
                  were putting in. The results you achieved were at the top end
                  of our expectations and the experience was great.`,
    },
    {
      name: "Emma and Jess",
      content: `I was introduced to Anton Zhouk through my buyer agent to rent
                  my property, and they did not disappoint me at all! They were
                  very open, realistic, prompt and trustworthy and wasted no
                  time to get my property up to scratch and find a decent
                  tenant. I was especially impressed with Nicole, the head of
                  property management for her professionalism and sincere advice
                  around this time. I have no hesitancy in recommending them to
                  any of my friends and family for a reliable and honest real
                  estate agent!`,
    },
    {
      name: "N. Wilson",
      content: `Anton Zhouk have been amazing to work with from the start. The
                  application process was quick Nicole was easy to talk to
                  through every step. Since living in our new house, Nicole has
                  been easy to contact and we always know she will help us, no
                  matter how big or small the question is. Renting can be a
                  difficult process, but Anton Zhouk have made it pretty
                  pain-free.`,
    },
    {
      name: "Rupesh",
      content: `  Anton communicated with both ourselves and buyers with clarity
                  and diligence, leaving no stone unturned. His dedication,
                  knowledge and willingness to do things a little differently
                  were much appreciated.`,
    },
    {
      name: "Rupesh",
      content: `I was introduced to Anton Zhouk through my buyer agent to rent
                  my property, and they did not disappoint me at all! They where
                  very open,realistic, prompt and trust worthy- and wasted no
                  time to get my property up to scratch and find a decent
                  tenant.I was especially impressed with Nicole, the head of
                  property management for her professionalism and sincere advice
                  around this time. I have no hesitancy in recommending them to
                  any of my friends and family for a reliable and honest real
                  estate agent!`,
    },
    {
      name: "R.Lewis",
      content: `Anton, thanks for a great job selling our Kew property. We
                  never felt pressured but could see the work you and your team
                  were putting in. The results you achieved were at the top end
                  of our expectations and the experience was great.`,
    },
    {
      name: "Emma and Jess",
      content: `I was introduced to Anton Zhouk through my buyer agent to rent
                  my property, and they did not disappoint me at all! They were
                  very open, realistic, prompt and trustworthy and wasted no
                  time to get my property up to scratch and find a decent
                  tenant. I was especially impressed with Nicole, the head of
                  property management for her professionalism and sincere advice
                  around this time. I have no hesitancy in recommending them to
                  any of my friends and family for a reliable and honest real
                  estate agent!`,
    },
    {
      name: "N. Wilson",
      content: `Anton Zhouk have been amazing to work with from the start. The
                  application process was quick Nicole was easy to talk to
                  through every step. Since living in our new house, Nicole has
                  been easy to contact and we always know she will help us, no
                  matter how big or small the question is. Renting can be a
                  difficult process, but Anton Zhouk have made it pretty
                  pain-free.`,
    },
    {
      name: "Rupesh",
      content: `  Anton communicated with both ourselves and buyers with clarity
                  and diligence, leaving no stone unturned. His dedication,
                  knowledge and willingness to do things a little differently
                  were much appreciated.`,
    },
    {
      name: "Rupesh",
      content: `I was introduced to Anton Zhouk through my buyer agent to rent
                  my property, and they did not disappoint me at all! They where
                  very open,realistic, prompt and trust worthy- and wasted no
                  time to get my property up to scratch and find a decent
                  tenant.I was especially impressed with Nicole, the head of
                  property management for her professionalism and sincere advice
                  around this time. I have no hesitancy in recommending them to
                  any of my friends and family for a reliable and honest real
                  estate agent!`,
    },
    {
      name: "R.Lewis",
      content: `Anton, thanks for a great job selling our Kew property. We
                  never felt pressured but could see the work you and your team
                  were putting in. The results you achieved were at the top end
                  of our expectations and the experience was great.`,
    },
    {
      name: "Emma and Jess",
      content: `I was introduced to Anton Zhouk through my buyer agent to rent
                  my property, and they did not disappoint me at all! They were
                  very open, realistic, prompt and trustworthy and wasted no
                  time to get my property up to scratch and find a decent
                  tenant. I was especially impressed with Nicole, the head of
                  property management for her professionalism and sincere advice
                  around this time. I have no hesitancy in recommending them to
                  any of my friends and family for a reliable and honest real
                  estate agent!`,
    },
    {
      name: "N. Wilson",
      content: `Anton Zhouk have been amazing to work with from the start. The
                  application process was quick Nicole was easy to talk to
                  through every step. Since living in our new house, Nicole has
                  been easy to contact and we always know she will help us, no
                  matter how big or small the question is. Renting can be a
                  difficult process, but Anton Zhouk have made it pretty
                  pain-free.`,
    },
    {
      name: "Rupesh",
      content: `  Anton communicated with both ourselves and buyers with clarity
                  and diligence, leaving no stone unturned. His dedication,
                  knowledge and willingness to do things a little differently
                  were much appreciated.`,
    },
    {
      name: "Rupesh",
      content: `I was introduced to Anton Zhouk through my buyer agent to rent
                  my property, and they did not disappoint me at all! They where
                  very open,realistic, prompt and trust worthy- and wasted no
                  time to get my property up to scratch and find a decent
                  tenant.I was especially impressed with Nicole, the head of
                  property management for her professionalism and sincere advice
                  around this time. I have no hesitancy in recommending them to
                  any of my friends and family for a reliable and honest real
                  estate agent!`,
    },
    {
      name: "R.Lewis",
      content: `Anton, thanks for a great job selling our Kew property. We
                  never felt pressured but could see the work you and your team
                  were putting in. The results you achieved were at the top end
                  of our expectations and the experience was great.`,
    },
    {
      name: "Emma and Jess",
      content: `I was introduced to Anton Zhouk through my buyer agent to rent
                  my property, and they did not disappoint me at all! They were
                  very open, realistic, prompt and trustworthy and wasted no
                  time to get my property up to scratch and find a decent
                  tenant. I was especially impressed with Nicole, the head of
                  property management for her professionalism and sincere advice
                  around this time. I have no hesitancy in recommending them to
                  any of my friends and family for a reliable and honest real
                  estate agent!`,
    },
    {
      name: "N. Wilson",
      content: `Anton Zhouk have been amazing to work with from the start. The
                  application process was quick Nicole was easy to talk to
                  through every step. Since living in our new house, Nicole has
                  been easy to contact and we always know she will help us, no
                  matter how big or small the question is. Renting can be a
                  difficult process, but Anton Zhouk have made it pretty
                  pain-free.`,
    },
    {
      name: "Rupesh",
      content: `  Anton communicated with both ourselves and buyers with clarity
                  and diligence, leaving no stone unturned. His dedication,
                  knowledge and willingness to do things a little differently
                  were much appreciated.`,
    },
  ];

  const arrowStyles = {
    zIndex: 2,
    cursor: "pointer",
    background: "none",
    border: "none",
  };

  


  const next = () => {
    if(currentSlide !== reviwer.length-1){
        setCurrentSlide((prev) => {
          return prev + 1;
        });
    } 

  }

  const prev = () => {
        if (currentSlide !== 0)
          setCurrentSlide((prev) => {
            return prev - 1;
          });
            
        }

  

  const names = reviwer.map((i) => {
    return (
      <>
        <h3 className="reviewerName">{reviwer[currentSlide].name}</h3>
      </>
    );
  });

    const slides = reviwer.map((i) => {
      return (
        <>
          <div className="testimonialContent">
            <h1>{i.content}</h1>
          </div>
        </>
      );
    });



  return (
    <>
      <div className="TestimonielSection">
        <div className="leftBlock testimonialContent">
          {/* <h1>The Proof</h1> */}
        </div>
        <div className="rightBlock">
          <Carousel 
          onChange={(i)=>{setCurrentSlide(i);console.log(`index ${i}`)}}
            selectedItem={currentSlide}
            autoPlay={true}
            showIndicators={false}
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
            // animationHandler={fade}
          >
            {slides && slides}
          </Carousel>
        </div>
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
        <h3 className="reviewerName">{reviwer[currentSlide].name}</h3>
      </div>
    </>
  );
};
