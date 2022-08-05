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

export const MapComp = ({
  coordinates = { lat: -37.822511507923224, lng: 145.0446865689759 },
}) => {
  const googlemap = useRef(null);
   let map;

  // const defaultProps = {
  //     center: {
  //       lat: props.lat,
  //       lng: props.long
  //     },
  //     zoom: 11
  //   };
  useEffect(()=>{
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        version: "weekly",
      });

        loader.load().then(() => {
          const google = window.google;
          map = new google.maps.Map(googlemap.current, {
            center: coordinates,
            zoom: 17,
            fullscreenControl: false, // remove the top-right button
            mapTypeControl: false, // remove the top-left buttons
            streetViewControl: false, // remove the pegman
            zoomControl: false, // remove the bottom-right buttons
          });

          // Add 1st marker
          var Latlng_0 = new google.maps.LatLng(
            coordinates.lat,
            coordinates.lng
          );

          const marker = new google.maps.Marker({
            position: Latlng_0,
            //  icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png",
            map: map,
          });
        });

  },[])


 



  return (
    <Container
      style={{
        height: "50vh",
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
      <div id="map" ref={googlemap} />
    </Container>
  );
};

