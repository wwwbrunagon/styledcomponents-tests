import React from 'react';
import { Card } from 'react-bootstrap';
// import { Container } from '../../Components/Container'
import { Button } from '../../Components/Button' 
import {ThemeProvider} from 'styled-components'
import styled from 'styled-components';
import card1 from '../images/card001.jpg';
import card2 from '../images/card002.jpg';
import card3 from '../images/card003.jpg';

const Styles = styled.div`

  display:flex;
  justify-content: space-around; 
  

 @media (max-width: 549px){
    display:none;
 }

 @media (min-width:550px){ 

  .cardMargin{
    margin-top:70px;
  }
  
  .cardTitle{
    margin-top:10px;
    font-size:18px;
    font-weight: bold;
    bottom:0;    
  }
  .cardParag{
    font-size: 12px;
  }
  .cardModule1{
    margin-right:20px;
  }
  .cardModule2{
    margin-right:20px;
  }
 }

 @media (max-width:595px){
  .cardMargin{
    margin-top:30px;
  }  
  .cardTitle{
    margin-top:10px;
    font-size:16px;
    font-weight: bold;
    bottom:0;    
  }
  .cardParag{
    font-size: 12px;
  }
  .cardModule1{
    margin-right:12px;
  }
  .cardModule2{
    margin-right:12px;
  }

 }

 @media (min-width: 740px){
  .cardMargin{
    margin-top:120px;
  }
  .cardTitle{
    margin-top:10px;
    font-size:20px;
    font-weight: bold;       
  }

 }

 @media (min-width: 897px){ 

  .cardMargin{
    margin-top:200px;
  }
  
  .cardTitle{
    margin-top:10px;
    font-size:22px;
    font-weight: bold;
    bottom:0;    
  }
  .cardParag{
    font-size: 14px;
  }
  .cardModule1{
    margin-right:20px;
  }
  .cardModule2{
    margin-right:20px;
  }
 }
`;

const theme = { 
  bchover:"#666666", 
  bg: "#FF4E50",
  bghover:"#666666",
  color: "white", 
  ta: "center",   
};
const num =[];
const txt = "STEP"
export const BtnLean = () => (
   
  <ThemeProvider theme={theme}>                
      <Button
      wdTablet={80}
      bdrTablet={15}
      fontTablet={13}
      fontwgtTablet={400}
      pdTablet={2}

      wdDesktop={80}
      bdrDesktop={15}
      fontDesktop={13}
      fontwgtDesktop={400}
      pdDesktop={2}
      > {txt} {num[0]}        
      </Button>     
    </ThemeProvider> 
  )


export const CardModule = () => (
    
  <Styles>
    <Card className="text-white cardModule1">
      <Card.Img src={card1} alt="Card image"/>
      <Card.ImgOverlay className="cardMargin">        
        <BtnLean />          
        <Card.Title className="cardTitle">Sed leo condimentum</Card.Title>
        <Card.Text className="cardParag"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card className="text-white cardModule2">
      <Card.Img src={card2} alt="Card image" />
      <Card.ImgOverlay className="cardMargin">
          <BtnLean />  
          <Card.Title className="cardTitle font-weight-bold">Morbi velit risus</Card.Title>
          <Card.Text className="cardParag"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card className="text-white">
      <Card.Img src={card3} alt="Card image" />
      <Card.ImgOverlay className="cardMargin">
          <BtnLean></BtnLean>  
          <Card.Title className="cardTitle">Sed leo condimentum</Card.Title>
          <Card.Text className="cardParag"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Card.Text>
      </Card.ImgOverlay>
    </Card>

  </Styles>
)