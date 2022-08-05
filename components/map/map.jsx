import styled from "styled-components";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import axios from "axios";

const Container = styled.div`
  height: 50vh;

  iframe {
    border: 0;
    width: 100%;
    height: 400px;
  }
`;

export const MapComp = ({ lat, lng, height, placeId }) => {
  const googlemap = useRef(null);
  let map;

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCTOE_MsQbccUCzP30zTME94o-vTI6-IaA",
      version: "weekly",
    });

    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: { lat: lat, lng: lng },
        zoom: 17,
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: false, // remove the bottom-right buttons
      });

      // Add 1st marker
      var Latlng_0 = new google.maps.LatLng(lat, lng);

      const marker = new google.maps.Marker({
        position: Latlng_0,
        //  icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png",
        map: map,
      });

      const geocoder = new google.maps.Geocoder();
      const infowindow = new google.maps.InfoWindow();

      if (!lat) {
        processAddressStr(placeId, map);
      }
    });
  }, []);
  const processAddressStr = (placeId, map) => {
    placeId = placeId.split(" ").join("%20");
    console.log(placeId, "placeId");
    getLocation(placeId,map)
  };
  const getLocation = async (placeId,map) => {
    axios({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${placeId}&key=AIzaSyCTOE_MsQbccUCzP30zTME94o-vTI6-IaA`,
    }).then((data) => {
      let adressLocation = data.data.results[0].geometry.location;
      map.setCenter(adressLocation);
      const marker = new google.maps.Marker({
        map,
        position: adressLocation,
      });
    });
  };

  return (
    <Container
      style={{
        height: height,
      }}
    >
    
      <div id="map" ref={googlemap} />
    </Container>
  );
};
