import { useEffect, useState } from "react";
import Select from "react-select";
import { Properties } from "../components/Properties/properties";
import { Search } from "../components/search/search";
const axios = require("axios").default;

export default function Sold() {
  const blueDropdown = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#A9C5DB",
      borderRadius: 0,
      color: "#ffffff",
      fontSize: "20px",
      borderColor: "#A9C5DB",
      minHeight: "45px",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#ffffff",

      fontWeight: "bold",
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    IndicatorContainer: (styles) => ({ ...styles, display: "none" }),
    dropdownIndicator: (styles) => ({ ...styles, color: "white" }),
  };

  const [response, setResponse] = useState(null);

  const token = "ozyttvptsnkpbvjfhogsvrtojytbptqeljwbyhyp";
  const key = "wljszq3Wsj8omYXJk6Aek9BdMQCE8ecF7aGmK9hI";
  const apiURL = "http://localhost:3100/sold";
  useEffect(() => {
    requestPropertyData();
  }, []);

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
        console.log(response.data.data.items);
        setResponse(response.data);

      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <section className="hero-banner sub">
        <div className="hero-banner__inner">
          <div className="hero-banner__content">
            <Search activePage={"index"} setResponse={setResponse}></Search>
          </div>
        </div>
      </section>
      <section className="properties properties--buy">
        <h1>Sold Properties</h1>
        <div className="properties__inner">
          <Properties type={"sold"} data = {response}></Properties>
        </div>
      </section>
    </>
  );
}
