import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;


export const FooterLayout = styled.div`
    color: #f00;
    font-size: ${props => `${props.fontSize}px`};
    background-color: green;

    @media (min-width: 800px) {
      background-color: red;
  }
`;



// export const TitleSmall = styled(Title)` 
//     color: #00f;
//     font-size: 12px;

// `

// export const Colore = styled.div` 
// color: ${(props) => props.color};
// `;



