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
  const apiURL =
    "https://ap-southeast-2.api.vaultre.com.au/api/v1.3/properties/residential/sale";
  useEffect(() => {
   // requestPropertyData();
  }, []);

  const requestPropertyData = async () => {
    await fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
        "X-Auth-Token": `${key}`,
        mode: "no-cors",
      },
      // body:JSON.stringify(yourNewData)
    })
      .then((res) => {
        console.log(res, "res");
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios
    //   .get(
    //     apiURL,

    //     {
    //       headers: {
    //         "Content-type": "application/json",
    //         Authorization: `Bearer ${token}`, // notice the Bearer before your token
    //         "X-Auth-Token": `${key}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });
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
        <h1>Sell Properties</h1>
        <div className="properties__inner">
          <Properties type = {'sold'}></Properties>
        </div>
      </section>
    </>
  );
}
