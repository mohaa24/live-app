import { useEffect, useState } from "react";
import styled from "styled-components";


const Container = styled.div`
   {
  }
`;

const REACT_APP_API_URL = 'http://api.weatherapi.com/v1/current.json'
const REACT_APP_API_KEY = 'c701862b73174ad084e133031221307'

export const Weather = () => {

  const [tem , setTemp] = useState(0)

  useEffect(()=>{
    getTemp();
  },[])

const  getTemp  = async () =>{
  await fetch(`${REACT_APP_API_URL}?key=${REACT_APP_API_KEY}&q=-37.8216,145.0367`)
      .then(res => res.json())
      .then(result => {      
        setTemp(result.current.temp_c);
      });
}


  return (
   <>
      <div className=" hero-banner__weather hero-banner__weather--desktop">
                  <section className="weather">
                    <div className="weather__inner">
                      <div className="weather__content">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              transform="translate(-622.000000, -644.000000)"
                              fill="#FFFFFF"
                              fillRule="nonzero"
                            >
                              <g transform="translate(622.000000, 644.000000)">
                                <path d="M5.57894737,6.31578947 L2.52631579,3.26315789 L3.26315789,2.52631579 L6.31578947,5.57894737 L5.57894737,6.31578947 Z M4.21052632,9.47368421 L0,9.47368421 L0,10.5263158 L4.21052632,10.5263158 L4.21052632,9.47368421 Z M17.4736842,3.26315789 L16.7368421,2.52631579 L13.6842105,5.57894737 L14.4210526,6.31578947 L17.4736842,3.26315789 Z M10.5263158,0 L9.47368421,0 L9.47368421,4.21052632 L10.5263158,4.21052632 L10.5263158,0 Z M14.7368421,10 C14.7368421,12.6315789 12.6315789,14.7368421 10,14.7368421 C7.36842105,14.7368421 5.26315789,12.6315789 5.26315789,10 C5.26315789,7.36842105 7.36842105,5.26315789 10,5.26315789 C12.6315789,5.26315789 14.7368421,7.36842105 14.7368421,10 Z M13.6842105,10 C13.6842105,8 12,6.31578947 10,6.31578947 C8,6.31578947 6.31578947,8 6.31578947,10 C6.31578947,12 8,13.6842105 10,13.6842105 C12,13.6842105 13.6842105,12 13.6842105,10 Z M15.7894737,9.47368421 L15.7894737,10.5263158 L20,10.5263158 L20,9.47368421 L15.7894737,9.47368421 Z M13.6842105,14.4210526 L16.6315789,17.3684211 L17.3684211,16.6315789 L14.4210526,13.6842105 L13.6842105,14.4210526 Z M9.47368421,20 L10.5263158,20 L10.5263158,15.7894737 L9.47368421,15.7894737 L9.47368421,20 Z M2.52631579,16.7368421 L3.26315789,17.4736842 L6.31578947,14.4210526 L5.57894737,13.6842105 L2.52631579,16.7368421 Z"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <p>
                        
                        Hawthorn VIC 3122 {tem &&  <span> {tem}° C</span>}
                        </p>
                      </div>
                    </div>
                  </section>
                </div>

                </>
  )
};
