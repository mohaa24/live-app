import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

const axios = require("axios").default;

const PropertImageBlock = styled.div`
  section {
  }
`;
const PropertySlide = styled.div`
  height: 100vh;
`;

export default function Property() {
  const [propertyID, setPropertyID] = useState(null);
  const [response, setResponse] = useState(null);
  const [idProperty, setIDProperty] = useState(null);
  const [filtered, setFiltered] = useState(false);

  const router = useRouter();
 
  let apiURL = `http://localhost:3100/${router.query.type}`;
  
  apiURL = `https://fluffy-garbanzo.herokuapp.com/${router.query.type}`;



  useEffect(() => {
     if (router) {
       setPropertyID(router.query.id);
     }
  });
  
  useEffect(() => {
    requestPropertyData();
  }, [propertyID]);


  // 16158146;
  const filterData = () => {
    let d = response.filter((i) => i.id == propertyID);
    setIDProperty(d);
    //console.log(idProperty[0].photos.length);
  };

  useEffect(() => {
    if (!filtered && response) {
      filterData();
    }
  });



  const requestPropertyData = async () => {
    axios({
      method: "get",
      url: apiURL,
      headers: {
        //  Authorization: `Bearer ${token}`,
        //  "X-Api-Key": key
      },
    })
      .then((response) => {
        setResponse(response.data.data.items);
      })
      .catch((error) => console.log(error));
  };


  let imageSlides = idProperty && idProperty[0].photos.map((i)=>{
    if(i.type == 'Photograph'){
  return( <PropertySlide className="propertySlides">
                  <img
                    className="propertImage"
                    src={
                     i.url
                    }
                    alt="1403/14 George Avenue Broadbeach"
                  /></PropertySlide>)
  }
}
  
  )







  return (
    <>
      {idProperty && (
        <PropertImageBlock>
          <section className="propertySection">
            <div className="single-property__inner container">
              <div className="single-property__details">
                <div className="single-property__info-left">
                  <h1>
                    <span className="address">
                      {idProperty[0].displayAddress}
                    </span>
                    <span className="suburb">
                      — {idProperty[0].address.suburb.name}
                    </span>
                  </h1>
                </div>
                <div className="single-property__info-right">
                  <p className="status">Undisclosed</p>
                  <p className="bbc">
                    <span>
                      <svg
                        width="117px"
                        height="117px"
                        viewBox="0 0 117 117"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g fill="#FFFFFF" fillRule="nonzero">
                            <path d="M4.5,52.9 L48.8,52.9 C51.1,52.9 52.9,51.1 52.9,48.8 L52.9,4.5 C52.9,2.2 51.1,0.4 48.8,0.4 L4.5,0.4 C2.2,0.4 0.4,2.2 0.4,4.5 L0.4,48.8 C0.4,51 2.3,52.9 4.5,52.9 Z M8.6,8.6 L44.7,8.6 L44.7,44.7 L8.6,44.7 L8.6,8.6 Z"></path>
                            <path d="M116.6,4.5 C116.6,2.2 114.8,0.4 112.5,0.4 L68.2,0.4 C65.9,0.4 64.1,2.2 64.1,4.5 L64.1,48.8 C64.1,51.1 65.9,52.9 68.2,52.9 L112.5,52.9 C114.8,52.9 116.6,51.1 116.6,48.8 L116.6,4.5 Z M108.4,44.7 L72.3,44.7 L72.3,8.6 L108.4,8.6 L108.4,44.7 L108.4,44.7 Z"></path>
                            <path d="M4.5,116.6 L48.8,116.6 C51.1,116.6 52.9,114.8 52.9,112.5 L52.9,68.2 C52.9,65.9 51.1,64.1 48.8,64.1 L4.5,64.1 C2.2,64.1 0.4,65.9 0.4,68.2 L0.4,112.5 C0.4,114.7 2.3,116.6 4.5,116.6 Z M8.6,72.3 L44.7,72.3 L44.7,108.4 L8.6,108.4 L8.6,72.3 L8.6,72.3 Z"></path>
                            <path d="M112.5,64.1 L68.2,64.1 C65.9,64.1 64.1,65.9 64.1,68.2 L64.1,112.5 C64.1,114.8 65.9,116.6 68.2,116.6 L112.5,116.6 C114.8,116.6 116.6,114.8 116.6,112.5 L116.6,68.2 C116.6,66 114.7,64.1 112.5,64.1 Z M108.4,108.4 L72.3,108.4 L72.3,72.3 L108.4,72.3 L108.4,108.4 L108.4,108.4 Z"></path>
                          </g>
                        </g>
                      </svg>
                    </span>{" "}
                    5 Bed — 3 Bath — 2 Car{" "}
                  </p>
                </div>
              </div>
            </div>
            {
              <Carousel
                autoPlay={true}
                showArrows={true}
                showIndicators={true}
                showThumbs={false}
                transitionTime={500}
                infiniteLoop={true}
              >
                {imageSlides && imageSlides}

                {imageSlides.length == 0 && (
                  <PropertySlide className="propertySlides">
                    <img
                      className="propertImage"
                      src={
                        "https://agentboxcdn.com.au/clients-data/4244/public_html/media/lt/1/1P5512/165785828834854777-rsd.jpg"
                      }
                      alt="1403/14 George Avenue Broadbeach"
                    />
                  </PropertySlide>
                )}
              </Carousel>
            }
          </section>
        </PropertImageBlock>
      )}
      <section className="propertyDetails">
        <div className="propertyText">
          <h1>A one-of-a-kind entertainer with pool-side pleasure</h1>
          {idProperty && idProperty[0].description}
        </div>
        <div className="teamDetails">
          <div className="single-property__title">
            <ul className="single-property__team">
              {idProperty &&
                idProperty[0].contactStaff.map((i) => {
                  return (
                    <li>
                      <figure>
                        <a href="">
                          <img src={i.photo.thumb_360} alt="Anton Zhouk" />
                        </a>
                      </figure>
                      <p>
                        <span>{`${i.firstName} ${i.lastName}`}</span>
                        <br />—{" "}
                        <a href={`tel:${i.phoneNumbers[0].number}`}>
                          {i.phoneNumbers[0].number}
                        </a>
                        <br />—<a href={`mailto:${i.email}`}>Email Agent</a>
                      </p>
                    </li>
                  );
                })}
            </ul>
          </div>

          <ul class="single-property__documents">

            {idProperty && idProperty[0].photos.map((i)=>{
              if (i.type == "Floorplan"){
                return (
                  <li>
                    <a href={i.url} rel="noopener noreferrer" target="_blank">
                      — Floor Plan
                    </a>
                  </li>
                )}
            })}
           
           
          </ul>
        </div>
      </section>
    </>
  );
}
