import styled from "styled-components";


const Container = styled.div`
iframe{
    border:0;
    width:100%;
    height:400px;
}
`

export const MapComp = (props) =>{

    // const defaultProps = {
    //     center: {
    //       lat: props.lat,
    //       lng: props.long
    //     },
    //     zoom: 11
    //   };

    return (
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.606492281249!2d145.0402126312928!3d-37.82268517754937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad643246a95a459%3A0x8489d62fa708b9ab!2sAnton%20Zhouk%20Real%20Estate!5e0!3m2!1sen!2slk!4v1657993759354!5m2!1sen!2slk"
          width={props.width || "500"}
          height={props.height || "450"}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    );
} 