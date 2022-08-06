import { MapComp } from "../components/map/map";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { Appraisal } from "../components/appraisal/appraisal";
import { useEffect, useState } from "react";
import axios from "axios";
// import andersonPark from "../public/andersonPark";
const AboutSlide = styled.div`
  height: 100vh;
`;

export default function Contact() {
    const [response, setResponse] = useState(null);
    

 
    let apiURL = "http://localhost:3100/posts";
    // apiURL = "https://fluffy-garbanzo.herokuapp.com/posts";

    useEffect(() => {
      requestBlogData();
    }, []);

  

    const requestBlogData = async () => {
      axios({
        method: "get",
        url: apiURL,
        headers: {
          //  Authorization: `Bearer ${token}`,
          //  "X-Api-Key": key
        },
      })
        .then((response) => {
          //console.log(response.data.data.items);
          setResponse(response.data);
          console.log(response.data, "responseee");
        })
        .catch((error) => console.log(error));
    };


  let cards = response && response.map((i)=>{
    return (
      <a class="card" href= {`/post?id=${i._id}`} >
        <img
          class="card__background"
          src={i.img}
        />
        <div class="card__text-container">
          <p class="card__category">{i.type}</p>
          <p class="card__title">{i.title}</p>
        </div>
      </a>
    );
  })
  return (
    <>
     
      <section className="blogSection">
        <h1>Blog</h1>

        <div className="news_wrapper">
        {cards && cards}
        </div>
      </section>
    </>
  );
}
