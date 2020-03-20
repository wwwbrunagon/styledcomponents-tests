import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import headerimg from '../../modules/images/header.jpg';
import { Button } from '../../Components/Button' 
import { Container } from '../../Components/Container'
import {ThemeProvider} from 'styled-components'


const Styles = styled.div`  
    color: #F7F3F2;

  .jumbo {
    background: url(${headerimg}) no-repeat bottom;
    background-size: cover;
    height: 630px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .txtStyle{
    margin-top: 150px;
    h1{
      font-weight: 900;
    }

    p{
      margin-top:20px;
      font-size: 18px;
      font-weight: 200;
    }
  
  }

  .navMargin{
    margin-top: -50px;
    display:flex;
    justify-content:space-around;
  }
  .brandStyle{
    margin-left:150px;    
    color: #F7F3F2;
    font-weight: 900;
    font-size:18px;    
  }

  .login{
    margin-right:20px;
    color: #F7F3F2;    
  }
  
  .signup{   
    font-size: 14px; 
    border: 1.5px solid white;
    margin: auto;
    width: 90px;
    border-radius: 30px;
    text-align: center;
  }

  .loginMargin{
    margin-right:150px;
  }

  @media (max-width: 549px){
    .txtStyle{
      span{
        display:none
      }
    }
    .brandMobile{  
      font-size: 18px;   
      font-weight: 800;
      margin-bottom: 30px;      
    }

  }

  @media (max-width: 650px){
    .loginMargin{
    margin-right:0px;    
  }
    .brandStyle{
      display:none;
    }

    .login{
    margin-right:20px;
    color: #F7F3F2;
    font-size: 16px;  
    font-weight:700;   
  }
  
  .signup{   
    width: 100px;
    font-size: 16px; 
    border: 1.5px solid white;
    font-weight:500;
    padding: 0 auto;
  }

  .navMargin{
    margin-top: 0px
  }

  .brandMobile{     
      font-size: 18px;   
      font-weight: 800;
      margin-bottom: 30px;  
    }

  }

  @media (min-width: 650px){
    .brandMobile{
      display:none;
    }    

  }
`;
const theme = {   
  bchover:"#666666", 
  bg: "#FF4E50",
  bghover:"#666666",
  color: " #F7F3F2",     
};


export const Header = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <nav class="navbar navMargin">
        <span class="navbar-text brandStyle">
          DREMESHARE
        </span>
        <Container>
          <div className="navbar loginMargin">
            <span class="navbar-text login">
              Login
            </span>
            <span class="navbar-text signup">
              Signup
            </span>
          </div>
        </Container>
      </nav>
     
      <div className="overlay"></div>
      <div className="text-center txtStyle">
        <h1 className="brandMobile">DREAMESHARE</h1>
        <h1>SHARE YOUR </h1>
        <h1>HOLIDAY DREAMS</h1>
        <p>And find the perfect partner to fullfill it</p>
      </div>
        <Container>
          <ThemeProvider theme={theme}>                
                  <Button className="text-center"
                  wdMobile={160}
                  bdrMobile={20}
                  fontszMobile={10}
                  fontwgtMobile={900}
                  pdMobile={7}

                  wdTablet={200}
                  bdrTablet={22}
                  fontszTablet={14}
                  fontwgtTablet={900}
                  pdTablet={10}                

                  wdDesktop={250}
                  bdrDesktop={30}                  
                  fontwgtDesktop={900}
                  pdDesktop={10}   
                  as="a" href="https://github.com/wwwbrunagon/dreamshare-project" target="_blank" rel="noopener"> 
                  Find your holiday partner
                  </Button>                           
              </ThemeProvider>
        </Container>
    </Jumbo>
  </Styles>
);
export default Header