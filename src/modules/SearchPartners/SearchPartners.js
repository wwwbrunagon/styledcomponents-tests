import React from "react";
import { SearchPartnersStyle, InputStyle} from './SearchPartnersStyles'
import { Button } from '../../Components/Button' 
import { Container } from '../../Components/Container'
import {ThemeProvider} from 'styled-components'

const theme = {   
    bchover:"#666666", 
    bg: "#FF4E50",
    bghover:"#666666",
    color: "white",     
  };


export const SearchPartners = () => (
  
    < SearchPartnersStyle> 
        <Container>
        <div className="description">
            <h2>Crate your holiday <span>activity</span></h2>            
            <p>Hi! What are your holiday interests?</p>                            
            <input className="formMobile" type="text" placeholder="Enter your interests"></input>             
        </div>
        </Container>   
        <Container>
            < InputStyle>
                <form>                
                    <input type="text" placeholder="Enter your interests"></input>
                </form>   
            </InputStyle> 
            <ThemeProvider theme={theme}>                
                <Button
                wdMobile={190}
                bdrMobile={20}
                fontszMobile={10}
                fontwgtMobile={900}
                pdMobile={7}

                wdTablet={200}
                bdrTablet={22}
                fontszTablet={14}
                fontwgtTablet={900}
                pdTablet={10}                

                wdDesktop={170}
                bdrDesktop={30}
                fontszDesktop={16}
                fontwgtDesktop={900}
                pdDesktop={10}
                
                as="a" href="https://github.com/wwwbrunagon/dreamshare-project" target="_blank" rel="noopener"> 
                Search partners
                </Button>                           
            </ThemeProvider>
        </Container>          
    </SearchPartnersStyle>  
);
export default SearchPartners

