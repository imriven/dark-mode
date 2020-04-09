import React from "react";
import Chart from "./Chart";
import Styled from "styled-components"

const WholeDiv = Styled.div`
background: radial-gradient(circle, rgba(255,255,255,0.41220238095238093) 0%, rgba(0,0,0,0.4150035014005602) 100%);
padding: 2% 0;
`

const ContainerDiv = Styled.div`
background: radial-gradient(circle, rgba(142,255,92,1) 0%, rgba(0,0,0,1) 100%);
border-radius: 5px;
box-shadow: 5px 5px 8px cadetBlue;
`

const AwesomeTitleHeader = Styled.h2`
text-shadow: 3px 3px 5px gray;
margin-bottom: 5%;
`

const AwesomeImage = Styled.img`
border-radius: 50%;
box-shadow: 5px 5px 8px black;
margin-bottom: 10%;
width:25%;
background-color:white;
`

const wrapper = Styled.div`
display:flex;
flex-direction:row;
flex-wrap:nowrap;
`

const Charts = ({ coinData, darkMode }) => {
  return (
    <WholeDiv className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <wrapper>
    
            <AwesomeTitleHeader className="coin__title">{coin.name}</AwesomeTitleHeader>
            <AwesomeImage src={coin.image} height="40" alt={coin.name} />

          </wrapper>
          <ContainerDiv>
          <Chart sparklineData={coin.sparkline_in_7d.price} darkMode={darkMode} />
        </ContainerDiv>
        </div>
      ))}
    </WholeDiv>
  );
};
export default Charts;
