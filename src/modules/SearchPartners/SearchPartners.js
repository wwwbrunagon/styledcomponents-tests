import React from "react";
import { SearchPartnersStyle, Container } from './SearchPartnersStyles'
import {Button} from '../../Components/Button'
import {ThemeProvider} from 'styled-components'

const theme = {    
    bg: "#FF4E50",
    color: "white",
    fw:"bold"  
  };

export default function (){
    return(        
       <SearchPartnersStyle>
            <Container>
                <ThemeProvider theme={theme}>                
                    <Button
                    wdMobile={100}
                    bdrMobile={10}
                    fontMobile={11}
                    pdMobile={8}

                    wdTablet={200}
                    bdrTablet={22}
                    fontTablet={14}
                    pdTablet={10}

                    wdDesktop={300}
                    bdrDesktop={30}
                    fontDesktop={16}
                    fwDesktop={900}
                    pdDesktop={15}                    
                    >
                    Search partners
                    </Button>                           
                </ThemeProvider>
            </Container>   
    </SearchPartnersStyle>  
    )
}
