import React from "react";
import { PartnersStyles} from './PartnerStyles'
import { Button } from '../../Components/Button' 
import { Container } from '../../Components/Container'
import { ThemeProvider } from 'styled-components'

import partner001 from "../images/image001.png"
import partner002 from "../images/image002.png"
import partner003 from "../images/image003.png"
import partner004 from "../images/image004.png"

const theme = {    
    bc: "#FF4E50",
    bs: "solid",
    bg: "white",
    color: "#FF4E50",     
  };


export default function Partner() {
    return(
        <PartnersStyles>
        <Container>
            <div className="partnerTitle">
                <h2>Meet a partner for your best <span className="titleVanish">holiday</span></h2>            
            </div> 
        </Container>
         <Container> 
            <div className="partnerSession"> 
                <div className="cardStyle">    
                    <div>                        
                        <img src={partner001} alt = "logo designed by areto"></img>
                        <p className="titleStyle">Bradley Hunter</p>
                        <div className="textStyle">
                            <p>Based in Chicago. Ilove playing tennis and loud music</p>
                        </div>                    
                    </div>
                    <div>
                        <img src={partner002} alt = "logo designed by areto"></img>
                        <p className="titleStyle">Diana Wells</p>
                        <div className="textStyle">
                            <p>Living in Athens, Greece. I love black and white classics, chillout music and green tea</p>
                        </div>                        
                    </div>
                </div>

                <div className="cardStyle">
                    <div>
                        <img src={partner003} alt = "logo designed by areto"></img>
                        <p className="titleStyle">Marie Bennett</p>
                        <div className="textStyle">
                            <p>Currently living in Colorado. Love of art, languages  and traveling</p>
                        </div>
                    </div>
                    <div>
                        <img src={partner004} alt = "logo designed by areto"></img>
                        <p className="titleStyle">Christopher Pierce</p>
                        <div className="textStyle">
                            <p>Star Wars fanatic. Ihave a persistent enthusiasm to create new things.</p>
                        </div>
                    </div>
                </div>
            </div>
            </Container>

            <Container>
                <ThemeProvider theme={theme}>                
                    <Button
                    wdMobile={230}
                    bdrMobile={22}
                    bwMobile={1.5}
                    fontszMobile={10}
                    fontwgtMobile={900}
                    pdMobile={8}

                    wdTablet={200}
                    bdrTablet={25}
                    bwTablet={1.5}
                    fontszTablet={14}
                    fontwgtTablet={900}
                    pdTablet={10}                

                    wdDesktop={190}
                    bdrDesktop={35}
                    bwDesktop={1.5}
                    fontszDesktop={16}
                    fontwgtDesktop={900}
                    pdDesktop={12} 
                    > See other partners
                    </Button>                           
                </ThemeProvider>
        </Container>
      


        </PartnersStyles>
        
    )
}