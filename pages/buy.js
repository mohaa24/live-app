import { useEffect, useState } from "react";
import Select from "react-select";
import { Properties } from "../components/Properties/properties";
import { Search } from "../components/search/search";
import { useRouter } from "next/router";

const axios = require("axios").default;

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
  const  [filterValue , setFilter] = useState(null);
   const router = useRouter();

     const { pid } = router.query;

     console.log(router, 'query')

  const apiURL =
 "http://localhost:3100/sale";


  useEffect(() => {
    requestPropertyData();
  }, []);

  setInterval(()=>{
  // console.log(filterValue);
  },1000)

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
            <Search activePage={"index"} setFilter={setFilter}></Search>
          </div>
        </div>
      </section>
      <section className="properties properties--buy">
        <h1>Buy Properties</h1>
        <div className="properties__inner">
          <Properties
            type={"buy"}
            data={response}
            filterValue={filterValue}
          ></Properties>
        </div>
      </section>
    </>
  );
}
