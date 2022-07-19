import { useEffect, useState } from "react";
import Select from "react-select";
import { Properties } from "../components/Properties/properties";
import { Search } from "../components/search/search";

export default function Buy() {
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
    requestPropertyData();
  }, []);

  const requestPropertyData = async () => {
    await fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
        "X-Auth-Token": `${key}`,
      },
      // body:JSON.stringify(yourNewData)
    })
      .then((res) => {
        console.log(res, "res");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <section className="hero-banner">
        <video
          src="http://shifaza21.sg-host.com/wp-content/uploads/2022/07/WEB3-2.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-banner__inner">
          <div className="hero-banner__content">
            <div className="hero-banner__menu">
              <ul className="">
                <li className="">
                  <button type="button" className="appraisal-button">
                    Request Appraisal
                  </button>
                </li>
              </ul>
            </div>

            <div className=" hero-banner__heading">
              <h1>OPENING DOORS TO MELBOURNE'S FINEST HOMES</h1>
            </div>

            <Search activePage={"index"} setResponse={setResponse}></Search>
          </div>
        </div>
      </section>
      <section className="properties properties--buy">
        <div className="properties__inner">
          <Properties></Properties>
        </div>
      </section>
    </>
  );
}
