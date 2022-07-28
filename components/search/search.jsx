import { useEffect, useState } from "react";
import Select from "react-select";
import Router from "next/router";
import { useRouter } from "next/router";

export const Search = (props) => {
  const [filterValueLocal, SetFilterLocal] = useState({
    query: "",
    main: 0,
    min: 0,
    max: 0,
    bed: 0,
    bath: 0,
    car: 0,
  });

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
      fontSize:13
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    IndicatorContainer: (styles) => ({ ...styles, display: "none" }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "White",
    }),
    menuList: (styles) => ({
      ...styles,
      backgroundColor: "white",
      color: "Black",
      fontFamily: "Montserrat",
      textTransform: "uppercase",
      zIndex:-5,
      textAlign: "left",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#ffffff",
      fontWeight: "bold",
      textTransform: "uppercase",
    }),
  };
  const router = useRouter();

  useEffect(() => {
    SetFilterLocal((prev) => ({ ...prev, query: router.query.query }));
  }, []);

  const handleChange = (e, type) => {
    if (e.value) {
      SetFilterLocal((prev) => ({ ...prev, [type]: e.value }));
    } else {
      SetFilterLocal((prev) => ({ ...prev, [type]: e.target.value }));
    }
  };

  const onsubmit = () => {
    if (props.activePage == "index") {
      Router.push(`/buy?query=${filterValueLocal.query}`);
    }
    if (props.setFilter) {
      props.setFilter(filterValueLocal);
    }

    console.log(filterValueLocal)
  };

  const changeCatogary = (e) =>{
    router.push(e.value);
  }
  return (
    <>
      <div className="searchBar">
        <div className="optionMenu">
          {" "}
          <Select
            className="dropDown"
            options={[
              { value: "buy", label: "BUY" },
              { value: "sold", label: "SELL" },
              { value: "rent", label: "RENT" },
            ]}
            styles={blueDropdown}
            placeholder="BUY"
            onChange={(e) => {handleChange(e, "main"); changeCatogary(e)}}
          ></Select>{" "}
        </div>
        <div className="searchArea">
          <input
            // placeholder="Search property address, postcodes or suburbs"
            placeholder='Search by suburb'
            className="search_input"
            onChange={(e) => handleChange(e, "query")}
            value={filterValueLocal.query}
          />
          <button
            className="searchButton"
            onClick={() => {
              onsubmit();
            }}
            type="submit"
          >
            <svg
              width="19px"
              height="18px"
              viewBox="0 0 19 18"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-1289.000000, -46.000000)">
                  <g transform="translate(1289.000000, 46.000000)">
                    <g>
                      <g>
                        <path
                          d="M18.6635459,17.284253 L11.6362006,10.9253654 C13.1367102,9.17733337 13.6202361,6.77412093 12.9112432,4.58183552 C12.2032082,2.38959923 10.405318,0.724091073 8.16612176,0.184001938 C5.92591848,-0.355178451 3.56664508,0.308723477 1.93778144,1.93778114 C0.308721319,3.56684127 -0.355178153,5.92594275 0.184002237,8.16612146 C0.724140492,10.4053669 2.38967321,12.2034044 4.58183582,12.9112429 C6.7740721,13.6202358 9.17738279,13.1367025 10.9253657,11.6362003 L17.9477988,18 L18.6635459,17.284253 Z M2.65141627,10.5820072 C1.59032164,9.52857551 0.991655311,8.09720422 0.987813382,6.60145942 C0.984945581,5.1067216 1.57592909,3.67137148 2.63223439,2.61329781 C3.68758182,1.55411892 5.12194951,0.959284049 6.61671189,0.959284049 C8.11147427,0.959284049 9.5458174,1.55411892 10.6011894,2.61329781 C11.6574947,3.67151884 12.2484735,5.10669704 12.2456104,6.60145942 C12.2417623,8.0971551 11.6431021,9.52860007 10.5820075,10.5820072 C9.5362633,11.6440597 8.10776561,12.2417682 6.61668733,12.2417682 C5.12560905,12.2417682 3.69716048,11.6440597 2.65136715,10.5820072 L2.65141627,10.5820072 Z"
                          fill="#233356"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="dropDownArea">
        <Select
          className="dropDown"
          options={[
            { value: "750,000", label: "$750,000" },
            { value: "1,000,000", label: "$1,000,000" },
            { value: "1,250,000", label: "$1,250,000" },
            { value: "1,500,000", label: "$1,500,000" },
            { value: "1,750,000", label: "$1,750,000" },
          ]}
          styles={blueDropdown}
          placeholder="MIN PRICE"
          onChange={(e) => handleChange(e, "min")}
        ></Select>
        <Select
          className="dropDown"
          options={[
            { value: "750,000", label: "$750,000" },
            { value: "1,000,000", label: "$1,000,000" },
            { value: "1,250,000", label: "$1,250,000" },
            { value: "1,500,000", label: "$1,500,000" },
            { value: "1,750,000", label: "$1,750,000" },
          ]}
          styles={blueDropdown}
          placeholder="MAX PRICE"
          onChange={(e) => handleChange(e, "max")}
        ></Select>
        <Select
          className="dropDown"
          options={[
            { value: "1", label: "1+" },
            { value: "2", label: "2+" },
            { value: "3", label: "3+" },
            { value: "4", label: "4+" },
            { value: "5", label: "5+" },
            { value: "6", label: "6+" },
          ]}
          styles={blueDropdown}
          placeholder="BED"
          onChange={(e) => handleChange(e, "bed")}
        ></Select>
        <Select
          className="dropDown"
          options={[
            { value: "1", label: "1+" },
            { value: "2", label: "2+" },
            { value: "3", label: "3+" },
            { value: "4", label: "4+" },
            { value: "5", label: "5+" },
            { value: "6", label: "6+" },
          ]}
          styles={blueDropdown}
          placeholder="BATH"
          onChange={(e) => handleChange(e, "bath")}
        ></Select>
        <Select
          className="dropDown"
          options={[
            { value: "1", label: "1+" },
            { value: "2", label: "2+" },
            { value: "3", label: "3+" },
            { value: "4", label: "4+" },
            { value: "5", label: "5+" },
            { value: "6", label: "6+" },
          ]}
          styles={blueDropdown}
          placeholder="CAR"
          onChange={(e) => handleChange(e, "car")}
        ></Select>
      </div>
    </>
  );
};
