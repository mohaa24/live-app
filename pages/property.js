import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";


const axios = require("axios").default;

const PropertImageBlock = styled.div`
  section {
  }
`;
const PropertySlide = styled.div`
  height: 100vh;
`;

export default function Property() {
  const [propertyID, setPropertyID] = useState(null);
  const [response, setResponse] = useState(null);
  const [idProperty, setIDProperty] = useState(null);
  const [filtered, setFiltered] = useState(false);

  const router = useRouter();

  let apiURL = `http://localhost:3100/${router.query.type}`;

  apiURL = `https://fluffy-garbanzo.herokuapp.com/${router.query.type}`;

  useEffect(() => {
    if (router) {
      setPropertyID(router.query.id);
    }
  });

  useEffect(() => {
    requestPropertyData();
  }, [propertyID]);

  // 16158146;
  const filterData = () => {
    let d = response.filter((i) => i.id == propertyID);
    setIDProperty(d);
    //console.log(idProperty[0].photos.length);
  };

  useEffect(() => {
    if (!filtered && response) {
      filterData();
    }
  });

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
        setResponse(response.data.data.items);
      })
      .catch((error) => console.log(error));
  };

  let imageSlides =
    idProperty &&
    idProperty[0].photos
      .filter((i, index) => i.type == "Photograph")
      .map((i, index) => {
        return (
          // <p>{index}</p>
          <PropertySlide className="propertySlides">
            <img
              className="propertImage"
              src={i.url}
              alt="1403/14 George Avenue Broadbeach"
            />
          </PropertySlide>
        );
      });

  let discrpText =
    idProperty &&
    idProperty[0] &&
    idProperty[0].description.split("\r\n\r\n").map((item, index) => {
      if (index == 3 || index == 5) {
        return <h3>{item}</h3>;
      }

      if (index == 0 || index == 2 || index == 4 || index == 6) {
        return <p>{item}</p>;
      }

      if (index == 7) {
        return (
          <ul>
            {item.split("&#x2022;").map((i,c) => {
             if(c!=0){ return <li>{i}</li>}
            })}
          </ul>
        );
      }
    });

  return (
    <>
      {idProperty && (
        <PropertImageBlock>
          <section className="propertySection">
            <div className="single-property__inner container">
              <div className="single-property__details">
                <div className="single-property__info-left">
                  <h1>
                    <span className="address">
                      {idProperty[0].displayAddress}
                    </span>
                    <span className="suburb">
                      — {idProperty[0].address.suburb.name}
                    </span>
                  </h1>
                </div>
                <div className="single-property__info-right">
                  <p className="status">
                    {/* {idProperty && idProperty[0].floorArea.value}{" "}
                    {idProperty && idProperty[0].floorArea.units} */}
                  </p>
                  <p className="bbc">
                    <span className="infoSpan">
                      <svg
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.654 13.6694H9.31567V9.87326C9.31636 9.65343 9.40399 9.44281 9.55943 9.28736C9.71487 9.13192 9.9255 9.04429 10.1453 9.0436H22.4076C22.6277 9.0436 22.8387 9.13101 22.9943 9.2866C23.1499 9.44219 23.2373 9.65322 23.2373 9.87326V12.5866C23.2373 12.6002 23.24 12.6137 23.2453 12.6262C23.2506 12.6387 23.2583 12.65 23.268 12.6595C23.2777 12.669 23.2893 12.6764 23.3019 12.6814C23.3146 12.6863 23.3281 12.6887 23.3416 12.6884H24.1765C24.1901 12.6887 24.2036 12.6863 24.2163 12.6814C24.2289 12.6764 24.2404 12.669 24.2502 12.6595C24.2599 12.65 24.2676 12.6387 24.2729 12.6262C24.2782 12.6137 24.2809 12.6002 24.2809 12.5866V9.87326C24.2802 9.37665 24.0826 8.90058 23.7315 8.54943C23.3803 8.19827 22.9042 8.00069 22.4076 8H10.1453C9.64872 8.00069 9.17265 8.19827 8.8215 8.54943C8.47034 8.90058 8.27276 9.37665 8.27207 9.87326V13.6694H7.8755C6.90677 13.6694 5.97772 14.0542 5.29272 14.7392C4.60773 15.4242 4.2229 16.3532 4.2229 17.322V18.2142C4.2229 18.2419 4.2339 18.2685 4.25347 18.288C4.27304 18.3076 4.29958 18.3186 4.32726 18.3186H5.16214C5.18982 18.3186 5.21636 18.3076 5.23593 18.288C5.25551 18.2685 5.2665 18.2419 5.2665 18.2142V17.3272C5.2665 16.6352 5.54138 15.9716 6.03066 15.4823C6.51994 14.9931 7.18355 14.7182 7.8755 14.7182H24.654C25.3459 14.7182 26.0095 14.9931 26.4988 15.4823C26.9881 15.9716 27.263 16.6352 27.263 17.3272V18.2195C27.263 18.2332 27.2657 18.2467 27.2709 18.2594C27.2762 18.2721 27.2839 18.2836 27.2935 18.2932C27.3032 18.3029 27.3147 18.3106 27.3274 18.3159C27.3401 18.3211 27.3536 18.3238 27.3673 18.3238H28.2022C28.2159 18.3238 28.2295 18.3211 28.2422 18.3159C28.2548 18.3106 28.2663 18.3029 28.276 18.2932C28.2857 18.2836 28.2934 18.2721 28.2986 18.2594C28.3039 18.2467 28.3066 18.2332 28.3066 18.2195V17.3272C28.3073 16.8471 28.2133 16.3715 28.03 15.9278C27.8468 15.484 27.5778 15.0808 27.2386 14.741C26.8994 14.4013 26.4965 14.1318 26.053 13.9479C25.6095 13.764 25.1341 13.6694 24.654 13.6694V13.6694Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M28.218 19.2657H4.32213C4.29446 19.2657 4.26791 19.2767 4.24834 19.2963C4.22877 19.3158 4.21777 19.3424 4.21777 19.37V23.2392C4.21777 23.2669 4.22877 23.2934 4.24834 23.313C4.26791 23.3326 4.29446 23.3436 4.32213 23.3436H5.15701C5.18469 23.3436 5.21124 23.3326 5.23081 23.313C5.25038 23.2934 5.26137 23.2669 5.26137 23.2392V20.3093H27.2787V23.2392C27.2787 23.2529 27.2814 23.2665 27.2867 23.2791C27.2919 23.2918 27.2996 23.3033 27.3093 23.313C27.319 23.3227 27.3305 23.3304 27.3431 23.3356C27.3558 23.3409 27.3694 23.3436 27.3831 23.3436H28.218C28.2456 23.3436 28.2722 23.3326 28.2918 23.313C28.3113 23.2934 28.3223 23.2669 28.3223 23.2392V19.37C28.3223 19.3424 28.3113 19.3158 28.2918 19.2963C28.2722 19.2767 28.2456 19.2657 28.218 19.2657V19.2657Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M10.3491 12.6101C10.3491 12.6378 10.3601 12.6643 10.3797 12.6839C10.3993 12.7035 10.4258 12.7144 10.4535 12.7144H11.2884C11.316 12.7144 11.3426 12.7035 11.3622 12.6839C11.3817 12.6643 11.3927 12.6378 11.3927 12.6101C11.3927 12.1825 11.5626 11.7724 11.865 11.47C12.1673 11.1676 12.5775 10.9977 13.0051 10.9977C13.4327 10.9977 13.8428 11.1676 14.1452 11.47C14.4476 11.7724 14.6174 12.1825 14.6174 12.6101C14.6174 12.6378 14.6284 12.6643 14.648 12.6839C14.6676 12.7035 14.6941 12.7144 14.7218 12.7144H15.5593C15.573 12.7144 15.5866 12.7117 15.5992 12.7065C15.6119 12.7013 15.6234 12.6936 15.6331 12.6839C15.6428 12.6742 15.6505 12.6627 15.6557 12.65C15.661 12.6374 15.6637 12.6238 15.6637 12.6101C15.642 11.9197 15.3526 11.2649 14.8566 10.7843C14.3606 10.3036 13.6971 10.0348 13.0064 10.0348C12.3157 10.0348 11.6521 10.3036 11.1562 10.7843C10.6602 11.2649 10.3708 11.9197 10.3491 12.6101V12.6101Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M16.8792 12.6101C16.8792 12.6238 16.8818 12.6373 16.8871 12.65C16.8923 12.6627 16.9 12.6742 16.9097 12.6839C16.9194 12.6935 16.9309 12.7012 16.9436 12.7065C16.9562 12.7117 16.9698 12.7144 16.9835 12.7144H17.8184C17.8321 12.7144 17.8457 12.7117 17.8583 12.7065C17.871 12.7012 17.8825 12.6935 17.8922 12.6839C17.9019 12.6742 17.9096 12.6627 17.9148 12.65C17.9201 12.6373 17.9228 12.6238 17.9228 12.6101C17.9228 12.1824 18.0926 11.7723 18.395 11.47C18.6974 11.1676 19.1075 10.9977 19.5351 10.9977C19.9627 10.9977 20.3728 11.1676 20.6752 11.47C20.9776 11.7723 21.1475 12.1824 21.1475 12.6101C21.1475 12.6238 21.1502 12.6373 21.1554 12.65C21.1607 12.6627 21.1683 12.6742 21.178 12.6839C21.1877 12.6935 21.1992 12.7012 21.2119 12.7065C21.2246 12.7117 21.2381 12.7144 21.2518 12.7144H22.0867C22.1004 12.7144 22.114 12.7117 22.1267 12.7065C22.1393 12.7012 22.1508 12.6935 22.1605 12.6839C22.1702 12.6742 22.1779 12.6627 22.1831 12.65C22.1884 12.6373 22.1911 12.6238 22.1911 12.6101C22.1911 11.9057 21.9112 11.2301 21.4132 10.732C20.9151 10.2339 20.2395 9.9541 19.5351 9.9541C18.8307 9.9541 18.1552 10.2339 17.6571 10.732C17.159 11.2301 16.8792 11.9057 16.8792 12.6101V12.6101Z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                      Bed {idProperty[0].bed}{" "}
                    </span>{" "}
                    <span className="infoSpan">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5958 11.5531C17.7559 11.6245 16.9532 11.9317 16.2803 12.4394C15.6074 12.9471 15.0916 13.6346 14.7923 14.4227C14.7848 14.4376 14.7808 14.4542 14.7808 14.4709C14.7808 14.4877 14.7848 14.5042 14.7923 14.5192C14.8017 14.5335 14.8145 14.5452 14.8295 14.5534C14.8445 14.5616 14.8613 14.566 14.8784 14.5661H15.7863C15.8056 14.5657 15.8244 14.5602 15.8409 14.5501C15.8574 14.54 15.871 14.5258 15.8802 14.5088C16.1817 13.9047 16.6508 13.4002 17.2314 13.0556C17.8119 12.711 18.4794 12.5407 19.1541 12.5653C19.6443 12.5506 20.1325 12.6337 20.5903 12.8097C21.048 12.9858 21.4661 13.2512 21.8202 13.5905C22.3431 14.1349 22.6973 14.8189 22.8402 15.5601H14.5575C14.5332 15.5603 14.5097 15.569 14.4911 15.5847C14.4726 15.6005 14.4601 15.6222 14.4558 15.6462C14.4028 15.924 14.374 16.2059 14.3697 16.4888C14.3697 16.5025 14.3724 16.516 14.3777 16.5287C14.3829 16.5414 14.3906 16.5529 14.4003 16.5626C14.41 16.5722 14.4215 16.5799 14.4341 16.5852C14.4468 16.5904 14.4604 16.5931 14.4741 16.5931H23.8655C23.879 16.5935 23.8925 16.5911 23.9052 16.5861C23.9178 16.5812 23.9294 16.5737 23.9391 16.5643C23.9488 16.5548 23.9565 16.5434 23.9618 16.5309C23.9671 16.5184 23.9698 16.505 23.9698 16.4914C23.9881 13.3322 21.7524 11.7331 19.6289 11.5609V8.11739C19.6293 8.10359 19.6268 8.08986 19.6217 8.07704C19.6166 8.06422 19.6089 8.05257 19.5991 8.04281C19.5894 8.03305 19.5777 8.02537 19.5649 8.02026C19.5521 8.01514 19.5383 8.01269 19.5245 8.01304H10.1332C10.1055 8.01304 10.0789 8.02404 10.0594 8.04361C10.0398 8.06318 10.0288 8.08972 10.0288 8.11739V22.3401H8.55489V8.10435C8.55489 8.07667 8.54389 8.05013 8.52433 8.03056C8.50476 8.01099 8.47822 8 8.45054 8H7.70445C7.67677 8 7.65023 8.01099 7.63066 8.03056C7.61109 8.05013 7.6001 8.07667 7.6001 8.10435V23.2062C7.6001 23.2339 7.61109 23.2604 7.63066 23.28C7.65023 23.2996 7.67677 23.3106 7.70445 23.3106H10.874C10.9017 23.3106 10.9283 23.2996 10.9478 23.28C10.9674 23.2604 10.9784 23.2339 10.9784 23.2062V9.0461H18.5958V11.5531Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M23.0228 18.0019C23.0129 17.9884 22.9999 17.9774 22.985 17.9699C22.97 17.9623 22.9535 17.9584 22.9367 17.9584C22.92 17.9584 22.9035 17.9623 22.8885 17.9699C22.8736 17.9774 22.8606 17.9884 22.8507 18.0019C22.7959 18.0801 22.2976 18.7845 22.2976 19.1132C22.2976 19.2827 22.3649 19.4452 22.4848 19.5651C22.6047 19.685 22.7672 19.7523 22.9367 19.7523C23.1063 19.7523 23.2688 19.685 23.3887 19.5651C23.5085 19.4452 23.5759 19.2827 23.5759 19.1132C23.5759 18.7923 23.0776 18.0801 23.0228 18.0019Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M20.5498 18.0018C20.5408 17.9879 20.5284 17.9765 20.5138 17.9687C20.4992 17.961 20.4828 17.9571 20.4663 17.9575V17.9575C20.4494 17.9574 20.4328 17.9613 20.4178 17.9691C20.4028 17.9768 20.3899 17.988 20.3802 18.0018C20.3228 18.0801 19.8271 18.7844 19.8271 19.1131C19.8271 19.2827 19.8945 19.4452 20.0143 19.5651C20.1342 19.6849 20.2968 19.7523 20.4663 19.7523C20.6358 19.7523 20.7984 19.6849 20.9182 19.5651C21.0381 19.4452 21.1054 19.2827 21.1054 19.1131C21.1054 18.7923 20.6124 18.0801 20.5498 18.0018Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M18.0793 18.0018C18.0698 17.9879 18.0569 17.9765 18.0419 17.9688C18.0268 17.961 18.0101 17.9571 17.9932 17.9575C17.9767 17.9571 17.9603 17.961 17.9457 17.9687C17.9311 17.9765 17.9187 17.9879 17.9097 18.0018C17.8523 18.0801 17.3567 18.7844 17.3567 19.1131C17.3567 19.2827 17.424 19.4452 17.5439 19.5651C17.6637 19.6849 17.8263 19.7523 17.9958 19.7523C18.1653 19.7523 18.3279 19.6849 18.4478 19.5651C18.5676 19.4452 18.635 19.2827 18.635 19.1131C18.635 18.7923 18.1367 18.0801 18.0793 18.0018Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M15.6088 18.0019C15.5988 17.9884 15.5859 17.9774 15.5709 17.9699C15.556 17.9623 15.5394 17.9584 15.5227 17.9584C15.5059 17.9584 15.4894 17.9623 15.4745 17.9699C15.4595 17.9774 15.4465 17.9884 15.4366 18.0019C15.3818 18.0801 14.8835 18.7845 14.8835 19.1132C14.8835 19.2827 14.9509 19.4452 15.0707 19.5651C15.1906 19.685 15.3532 19.7523 15.5227 19.7523C15.6922 19.7523 15.8548 19.685 15.9746 19.5651C16.0945 19.4452 16.1618 19.2827 16.1618 19.1132C16.1618 18.7923 15.6557 18.0801 15.6088 18.0019Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M21.6375 20.0445C21.621 20.0441 21.6046 20.048 21.59 20.0557C21.5753 20.0635 21.563 20.0749 21.554 20.0888C21.4966 20.1697 21.001 20.8714 21.001 21.2001C21.001 21.3696 21.0683 21.5322 21.1882 21.6521C21.308 21.7719 21.4706 21.8393 21.6401 21.8393C21.8096 21.8393 21.9722 21.7719 22.092 21.6521C22.2119 21.5322 22.2792 21.3696 22.2792 21.2001C22.2792 20.8792 21.781 20.1566 21.7236 20.0888C21.7141 20.0748 21.7012 20.0635 21.6862 20.0557C21.6711 20.048 21.6544 20.0441 21.6375 20.0445V20.0445Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M24.1913 20.0888C24.1816 20.075 24.1687 20.0637 24.1537 20.056C24.1387 20.0483 24.1221 20.0443 24.1052 20.0444V20.0444C24.0883 20.0443 24.0717 20.0483 24.0567 20.056C24.0417 20.0637 24.0288 20.075 24.0191 20.0888C23.9643 20.1697 23.4661 20.8714 23.4661 21.2001C23.4661 21.3696 23.5334 21.5322 23.6533 21.652C23.7731 21.7719 23.9357 21.8392 24.1052 21.8392C24.2747 21.8392 24.4373 21.7719 24.5571 21.652C24.677 21.5322 24.7443 21.3696 24.7443 21.2001C24.7443 20.8792 24.2461 20.1697 24.1913 20.0888Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M19.1723 20.0445C19.1555 20.0443 19.1388 20.0483 19.1238 20.056C19.1088 20.0638 19.0959 20.075 19.0863 20.0888C19.0289 20.1697 18.5332 20.8714 18.5332 21.2001C18.5332 21.3696 18.6005 21.5322 18.7204 21.6521C18.8403 21.7719 19.0028 21.8393 19.1723 21.8393C19.3418 21.8393 19.5044 21.7719 19.6243 21.6521C19.7441 21.5322 19.8115 21.3696 19.8115 21.2001C19.8115 20.8792 19.3132 20.1566 19.2558 20.0888C19.2469 20.0749 19.2345 20.0635 19.2199 20.0557C19.2053 20.048 19.1889 20.0441 19.1723 20.0445V20.0445Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M16.6992 20.0444C16.6823 20.0443 16.6657 20.0483 16.6507 20.056C16.6357 20.0637 16.6228 20.075 16.6131 20.0888C16.5583 20.1697 16.0601 20.8714 16.0601 21.2001C16.0601 21.3696 16.1274 21.5322 16.2473 21.652C16.3671 21.7719 16.5297 21.8392 16.6992 21.8392C16.8687 21.8392 17.0313 21.7719 17.1511 21.652C17.271 21.5322 17.3383 21.3696 17.3383 21.2001C17.3383 20.8792 16.8427 20.1566 16.7853 20.0888C16.7756 20.075 16.7627 20.0637 16.7477 20.056C16.7327 20.0483 16.7161 20.0443 16.6992 20.0444V20.0444Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M14.2366 20.0445C14.2202 20.0445 14.204 20.0486 14.1894 20.0563C14.1749 20.0641 14.1624 20.0752 14.1531 20.0888C14.0958 20.1697 13.6001 20.8714 13.6001 21.2001C13.6001 21.3696 13.6674 21.5322 13.7873 21.6521C13.9072 21.7719 14.0697 21.8393 14.2392 21.8393C14.4087 21.8393 14.5713 21.7719 14.6912 21.6521C14.811 21.5322 14.8784 21.3696 14.8784 21.2001C14.8784 20.8792 14.3801 20.1566 14.3227 20.0888C14.3132 20.0748 14.3003 20.0635 14.2853 20.0557C14.2703 20.048 14.2535 20.0441 14.2366 20.0445Z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>{" "}
                      Bath {idProperty[0].bath}{" "}
                    </span>
                    <span className="infoSpan">
                      <svg
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.2837 15.0157C29.184 14.9256 29.0963 14.823 29.0228 14.7105C28.8887 14.332 28.8011 13.9387 28.7619 13.5392C28.683 12.8753 28.5326 12.222 28.3132 11.5905C27.5958 9.67827 25.4071 9 23.7506 9H20.2314C16.2896 9 13.1018 10.8261 10.7748 12.1513C9.51741 12.8713 8.42697 13.4922 7.74609 13.4922C2.6304 13.7244 2.63301 17.8149 2.63562 20.014V20.1575C2.63562 20.1712 2.63831 20.1848 2.64356 20.1974C2.6488 20.2101 2.65649 20.2216 2.66618 20.2313C2.67587 20.241 2.68737 20.2486 2.70003 20.2539C2.71269 20.2591 2.72626 20.2618 2.73996 20.2618H3.57475C3.58868 20.2622 3.60253 20.2597 3.61549 20.2546C3.62845 20.2496 3.64026 20.2419 3.65023 20.2322C3.6602 20.2225 3.66812 20.2109 3.67353 20.198C3.67893 20.1852 3.68172 20.1714 3.68171 20.1575V20.0114C3.68171 17.7809 3.68171 14.7209 7.76957 14.5331H25.7358C25.7635 14.5331 25.79 14.5221 25.8096 14.5025C25.8292 14.483 25.8402 14.4564 25.8402 14.4287V13.594C25.8402 13.5663 25.8292 13.5397 25.8096 13.5202C25.79 13.5006 25.7635 13.4896 25.7358 13.4896H10.5296L11.2939 13.0539C13.5192 11.7835 16.5688 10.0409 20.2314 10.0409H23.7401C25.0628 10.0409 26.7976 10.5444 27.3297 11.9661C27.5205 12.5273 27.6517 13.107 27.721 13.6957C27.8202 14.34 27.9089 14.8957 28.1176 15.2453C28.2392 15.4391 28.3876 15.6147 28.5584 15.767C28.7158 15.8884 28.8396 16.048 28.9181 16.2306C28.9966 16.4132 29.0273 16.6128 29.0071 16.8105V20.1575C29.0071 20.1714 29.0099 20.1852 29.0153 20.198C29.0207 20.2109 29.0287 20.2225 29.0386 20.2322C29.0486 20.2419 29.0604 20.2496 29.0734 20.2546C29.0863 20.2597 29.1002 20.2622 29.1141 20.2618H29.9489C29.9766 20.2618 30.0031 20.2508 30.0227 20.2313C30.0422 20.2117 30.0532 20.1852 30.0532 20.1575V16.8027C30.0741 16.4653 30.0153 16.1278 29.8816 15.8174C29.7479 15.507 29.5431 15.2323 29.2837 15.0157V15.0157Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M20.0777 19.2627H12.2672C12.2096 19.2627 12.1628 19.3094 12.1628 19.367V20.2018C12.1628 20.2595 12.2096 20.3062 12.2672 20.3062H20.0777C20.1353 20.3062 20.182 20.2595 20.182 20.2018V19.367C20.182 19.3094 20.1353 19.2627 20.0777 19.2627Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M7.48805 16.881C6.88645 16.881 6.29836 17.0594 5.79814 17.3936C5.29793 17.7278 4.90805 18.2029 4.67783 18.7587C4.44761 19.3145 4.38737 19.9261 4.50474 20.5162C4.6221 21.1062 4.9118 21.6482 5.3372 22.0736C5.7626 22.499 6.30459 22.7887 6.89464 22.9061C7.48468 23.0234 8.09628 22.9632 8.65209 22.733C9.2079 22.5027 9.68296 22.1129 10.0172 21.6127C10.3514 21.1124 10.5298 20.5243 10.5298 19.9227C10.5291 19.1162 10.2084 18.3429 9.63814 17.7727C9.06785 17.2024 8.29457 16.8817 7.48805 16.881V16.881ZM7.48805 21.921C7.09283 21.921 6.70649 21.8038 6.37787 21.5843C6.04926 21.3647 5.79313 21.0526 5.64189 20.6875C5.49064 20.3223 5.45107 19.9205 5.52817 19.5329C5.60528 19.1453 5.79559 18.7892 6.07506 18.5097C6.35452 18.2303 6.71058 18.04 7.09821 17.9629C7.48584 17.8858 7.88762 17.9253 8.25276 18.0766C8.6179 18.2278 8.92999 18.4839 9.14956 18.8126C9.36913 19.1412 9.48633 19.5275 9.48633 19.9227C9.48564 20.4525 9.27489 20.9604 8.90029 21.335C8.52569 21.7096 8.01782 21.9203 7.48805 21.921Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M24.8645 16.6697C24.2629 16.6697 23.6748 16.8481 23.1746 17.1823C22.6744 17.5165 22.2845 17.9916 22.0543 18.5474C21.8241 19.1032 21.7638 19.7148 21.8812 20.3049C21.9986 20.8949 22.2883 21.4369 22.7137 21.8623C23.1391 22.2877 23.6811 22.5774 24.2711 22.6948C24.8611 22.8121 25.4727 22.7519 26.0286 22.5217C26.5844 22.2914 27.0594 21.9016 27.3937 21.4014C27.7279 20.9011 27.9063 20.313 27.9063 19.7114C27.9056 18.9049 27.5849 18.1316 27.0146 17.5614C26.4443 16.9911 25.671 16.6704 24.8645 16.6697ZM24.8645 21.7097C24.4693 21.7097 24.083 21.5925 23.7543 21.3729C23.4257 21.1534 23.1696 20.8413 23.0184 20.4761C22.8671 20.111 22.8275 19.7092 22.9046 19.3216C22.9817 18.934 23.1721 18.5779 23.4515 18.2984C23.731 18.019 24.087 17.8287 24.4747 17.7516C24.8623 17.6745 25.2641 17.714 25.6292 17.8653C25.9944 18.0165 26.3065 18.2726 26.526 18.6013C26.7456 18.9299 26.8628 19.3162 26.8628 19.7114C26.8621 20.2412 26.6514 20.7491 26.2768 21.1237C25.9022 21.4983 25.3943 21.709 24.8645 21.7097V21.7097Z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>{" "}
                      Car {idProperty[0].garages}{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {
              <Carousel
                autoPlay={true}
                showArrows={true}
                showIndicators={true}
                showThumbs={false}
                transitionTime={500}
                infiniteLoop={true}
              >
                {imageSlides && imageSlides}

                {/* {imageSlides.length == 0 && (
                  <PropertySlide className="propertySlides">
                    <img
                      className="propertImage"
                      src={
                        "https://agentboxcdn.com.au/clients-data/4244/public_html/media/lt/1/1P5512/165785828834854777-rsd.jpg"
                      }
                      alt="1403/14 George Avenue Broadbeach"
                    />
                  </PropertySlide>
                )} */}
              </Carousel>
            }
          </section>
        </PropertImageBlock>
      )}
      <section className="propertyDetails">
        <div className="propertyText">
          <h1>{idProperty && idProperty[0].heading}</h1>
          <p>{discrpText && discrpText}</p>
        </div>
        <div className="teamDetails">
          <div className="single-property__title">
            <ul className="single-property__team">
              {idProperty &&
                idProperty[0].contactStaff.map((i) => {
                  return (
                    <li>
                      <figure>
                        <a href="">
                          <img src={i.photo.thumb_360} alt="Anton Zhouk" />
                        </a>
                      </figure>
                      <p>
                        <span>{`${i.firstName} ${i.lastName}`}</span>
                        <br />—{" "}
                        <a href={`tel:${i.phoneNumbers[0].number}`}>
                          {i.phoneNumbers[0].number}
                        </a>
                        <br />—<a href={`mailto:${i.email}`}> Email Agent</a>
                      </p>
                    </li>
                  );
                })}
            </ul>
          </div>

          <ul class="single-property__documents">
            {idProperty &&
              idProperty[0].photos.map((i) => {
                if (i.type == "Floorplan") {
                  return (
                    <li>
                      <a href={i.url} rel="noopener noreferrer" target="_blank">
                        — Floor Plan
                      </a>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      </section>
    </>
  );
  
}
