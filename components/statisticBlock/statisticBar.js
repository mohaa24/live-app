import styled from "styled-components";
import Countup from 'react-countup';
import { useState } from "react";


const Container = styled.div`
   {
  }
`;

export const StatisticBar = () => {


  
  return (
    <>
        <div className="statistic-bar">
                      <div className="statistic-block">
                        <div className="number-block">
                           
                          <Countup className="number-block"
                                    duration={2}
                                    end={102}
                                    delay={1}
                                    enableScrollSpy={true}
                                />
                       
                      </div>
                      <div className="text-block">
                        transactions in the past 3 years
                        </div>
                        </div>
                      <div className="statistic-block">
                        <div className="number-block">$ 
                         <Countup className="number-block"
                                    duration={2}
                                    end={6.7}
                                    delay={1}
                                    decimals={1}
  decimal="."
                                    enableScrollSpy={true}
                                />
                                </div>
                        <div className="text-block">
                        highest sale price
                        </div>
                      </div>
                      <div className="statistic-block">
                        <div className="number-block">$
                        <Countup className="number-block"
                                    duration={2}
                                    end={243}
                                    delay={1}
                                    
                                    enableScrollSpy={true}
                                />
                                M
                                </div>
                        <div className="text-block">
                        average sale price
                        </div>
                      </div> <div className="statistic-block">
                        <div className="number-block">$
                        <Countup className="number-block"
                                    duration={2}
                                    end={238}
                                    delay={1}
                             
                                    enableScrollSpy={true}
                                />
                                M</div>
                        <div className="text-block">
                          TOTAL VALUE OF PROPERTY SOLD
                        </div>
                      </div> <div className="statistic-block">
                        <div className="number-block">$
                        <Countup className="number-block"
                                    duration={2}
                                    end={10.2}
                                    delay={1}
                                    decimals={1}
  decimal="."
                                    enableScrollSpy={true}
                                />
                              M</div>
                        <div className="text-block">
                        sum total achieved above client's expectations
                        </div>
                      </div>

                    </div>
    </>
  );
};
