import Fade from 'react-reveal/Fade';
import Select from "react-select";
import { TestimonialCard } from "../components/testimonials/testimonials";
import { BlogCard } from "../components/blog_card/blogCard";
import { Header } from "../components/header/header";
import { StatisticBar } from "../components/statisticBlock/statisticBar";
import { Weather } from "../components/weather/weather";
import Countup from 'react-countup';
const blueDropdown = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#60c2c9",
      borderRadius: 0,
      color: "#ffffff",
    }),
    placeholder: (styles) => ({ ...styles, color: "#ffffff", fontFamily: "Montserrat", fontWeight:'bold' }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    IndicatorContainer: (styles) => ({ ...styles, display: "none" }),
    dropdownIndicator:   (styles) => ({ ...styles, color: "white" }),
  };



export default function About() {

    return(
        <>
      
      <section className="hero-banner-about  "><div className="hero-banner-about__inner">
          <div className="hero-banner-about__content"><div className="hero-banner-about__details">
              <div className=" hero-banner-about__heading">
                  <h2 className="heading">About Us</h2><div className="copy"><p>A core business model based on Relationships, Excellence and Authenticity prevail to ensure a customer experience of the highest standard.</p>
</div></div></div><div className="hero-banner-about__image">
    <img src="https://www.antonzhouk.com.au/static/Office-Web-4-30793118ba1684757205e1ec23f2aaf6.jpg" alt="The leaders in prestige"/>
        </div></div></div></section>
       
        </>
    )
}