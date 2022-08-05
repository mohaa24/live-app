import styled from "styled-components";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";


const Container = styled.div`
height:50vh;

  iframe {
    border: 0;
    width: 100%;
    height: 400px;
  }
`;

export const MapComp = (props) => {
    const googlemap = useRef(null);

  // const defaultProps = {
  //     center: {
  //       lat: props.lat,
  //       lng: props.long
  //     },
  //     zoom: 11
  //   };
   const loader = new Loader({
     apiKey: process.env.NEXT_PUBLIC_API_KEY,
     version: "weekly",
   });

    let map;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });

  return (
    <Container
    style={{
      height:'50vh'
    }}
    >
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.606492281249!2d145.0402126312928!3d-37.82268517754937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad643246a95a459%3A0x8489d62fa708b9ab!2sAnton%20Zhouk%20Real%20Estate!5e0!3m2!1sen!2slk!4v1657993759354!5m2!1sen!2slk"
        width={props.width || "500"}
        height={props.height || "450"}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <div id="map" ref={googlemap}
      style={{width:'500', height:'450'}}
      />
    </Container>
  );
};

