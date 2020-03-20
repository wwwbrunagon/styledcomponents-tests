import React from "react";
import styled from "styled-components";
import { Carousel } from 'react-bootstrap'
import { Container } from '../../Components/Container'
import { Button } from '../../Components/Button' 
import {ThemeProvider} from 'styled-components'
import card1 from '../images/carousel1.jpg'
import card2 from '../images/carousel2.jpg'
import card3 from '../images/carousel3.jpg'


const Styles = styled.div`
 @media (min-width: 549px){
    display:none;
 }


h3{
    text-align:left;
    margin-top:10px;
    font-weight:bold; 
}
p{
    text-align: left;
    font-size: 13px;
    color: #E3E3E3;
}
    
`;

const theme = { 
    bchover:"#666666", 
    bg: "#FF4E50",
    bghover:"#666666",
    color: "white",     
  };



export const CardsCarousel = () => {
    return(
        <Styles>
            <Carousel>
                <Carousel.Item>                    
                    <img
                    className="d-block"
                    src={card1}
                    alt="Third slide"
                    />       
                    <Carousel.Caption>
                        <Container>
                            <ThemeProvider theme={theme}>                
                                <Button
                                mrMobile={100}
                                wdMobile={80}
                                bdrMobile={20}
                                fontszMobile={12}
                                fontwgtMobile={400}
                                pdMobile={2}                        
                                as="a" href="https://github.com/wwwbrunagon/dreamshare-project" target="_blank" rel="noopener"> 
                                STEP 1
                                </Button>                           
                            </ThemeProvider>
                            <h3>Sed leo enim</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block"
                    src={card2}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Container>
                            <ThemeProvider theme={theme}>                
                                <Button
                                mrMobile={100}
                                wdMobile={80}
                                bdrMobile={20}
                                fontszMobile={12}
                                fontwgtMobile={400}
                                pdMobile={2}                     
                                as="a" href="https://github.com/wwwbrunagon/dreamshare-project" target="_blank" rel="noopener"> 
                                STEP 2
                                </Button>                           
                            </ThemeProvider>
                            <h3>Sed leo enim</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block"
                    src={card3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Container>
                            <ThemeProvider theme={theme}>                
                                <Button
                                    mrMobile={100}
                                wdMobile={80}
                                bdrMobile={20}
                                fontszMobile={12}
                                fontwgtMobile={400}
                                pdMobile={2}                              
                                as="a" href="https://github.com/wwwbrunagon/dreamshare-project" target="_blank" rel="noopener"> 
                                STEP 3
                                </Button>                           
                            </ThemeProvider>
                            <h3>Sed leo enim</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </Styles>
    )
}