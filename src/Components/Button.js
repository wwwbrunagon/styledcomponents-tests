import styled from "styled-components";

export const Button = styled.div` 
    cursor: pointer;      
    text-decoration: none;
    justify-content: center;
   
    color: ${props => props.theme.color};    
    background: ${props => props.theme.bg};
    border-color: ${props => props.theme.bc}; 
    border-style: ${props => props.theme.bs};
    text-align: ${props => props.theme.ta};
   
    &:hover{
      border-color: ${props => props.theme.bchover};
      background: ${props => props.theme.bghover};
    }


    @media (max-width: 549px){
        margin-right: ${props => `${props.mrMobile}px`};
        width: ${props => `${props.wdMobile}px`};
        border-radius: ${props => `${props.bdrMobile}px`};
        border-width:${props => `${props.bwMobile}px`};
        font-size: ${props => `${props.fontszMobile}px`};       
        font-weight:${props => `${props.fontwgtMobile}`};
        padding: ${props => `${props.pdMobile}px`};
     } 

     @media (min-width: 550px){
        width: ${props => `${props.wdDesktop}px`};
        border-radius: ${props => `${props.bdrTablet}px`};
        border-width:${props => `${props.bwTablet}px`};
        font-size: ${props => `${props.fontTablet}px`}; 
        font-weight:${props => `${props.fontwgtTablet}`};              
        padding: ${props => `${props.pdTablet}px`}; 
     }

     @media (min-width: 800px){
        width: ${props => `${props.wdDesktop}px`};
        border-radius: ${props => `${props.bdrDesktop}px`};
        border-width:${props => `${props.bwDesktop}px`};
        font-size: ${props => `${props.fontDesktop}px`};
        font-weight:${props => `${props.fontwgtDesktop}`};        
        padding: ${props => `${props.pdDesktop}px`}; 
     }
`;
