import styled from "styled-components";

export const Button = styled.div` 
    justify-content: center; 
    text-decoration: none;
    cursor: pointer;    
    color: ${props => props.theme.color};    
    background: ${props => props.theme.bg};
    font-weight: ${props => props.theme.fw};  
    

    @media (max-width: 549px){
        width: ${props => `${props.wdMobile}px`};
        border-radius: ${props => `${props.bdrMobile}px`};
        font-size: ${props => `${props.fontSizeMobile}px`};       
        padding: ${props => `${props.pdMobile}px`};
     } 

     @media (min-width: 550px){
        width: ${props => `${props.wdDesktop}px`};
        border-radius: ${props => `${props.bdrTablet}px`};
        font-size: ${props => `${props.fontTablet}px`};               
        padding: ${props => `${props.pdTablet}px`}; 
     }

     @media (min-width: 800px){
        width: ${props => `${props.wdDesktop}px`};
        border-radius: ${props => `${props.bdrDesktop}px`};
        font-size: ${props => `${props.fontDesktop}px`};        
        padding: ${props => `${props.pdDesktop}px`}; 
     }
`;
