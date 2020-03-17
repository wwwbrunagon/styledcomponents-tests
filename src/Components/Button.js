import styled from "styled-components";

export const Button = styled.div` 
    cursor: pointer;    
    justify-content: center; 
    text-decoration: none;
    
    color: ${props => props.theme.color};    
    background: ${props => props.theme.bg};

    @media (max-width: 549px){
        width: ${props => `${props.wdMobile}px`};
        border-radius: ${props => `${props.bdrMobile}px`};
        font-size: ${props => `${props.fontszMobile}px`};       
        font-weight:${props => `${props.fontwgtMobile}`};
        padding: ${props => `${props.pdMobile}px`};
     } 

     @media (min-width: 550px){
        width: ${props => `${props.wdDesktop}px`};
        border-radius: ${props => `${props.bdrTablet}px`};
        font-size: ${props => `${props.fontTablet}px`}; 
        font-weight:${props => `${props.fontwgtTablet}`};              
        padding: ${props => `${props.pdTablet}px`}; 
     }

     @media (min-width: 800px){
        width: ${props => `${props.wdDesktop}px`};
        border-radius: ${props => `${props.bdrDesktop}px`};
        font-size: ${props => `${props.fontDesktop}px`};
        font-weight:${props => `${props.fontwgtDesktop}`};        
        padding: ${props => `${props.pdDesktop}px`}; 
     }
`;
