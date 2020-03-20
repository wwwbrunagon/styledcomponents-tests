import React from "react";
import { CardsCarousel } from './Carousel';
import { CardModule } from './CardModule';
import { Container } from '../../Components/Container';
import styled from "styled-components";

export const CardsStyles = styled.div`
        h2{
            font-weight:bold;
        }

    @media (max-width: 549px){
        h2{
            font-size:22px;           
            margin-top:15px;
        }

    }

    @media (min-width: 550px){
        h2{
            font-size:20px;
            margin-top:15px;
        }

    }

    @media (min-width: 720px){
        h2{
            font-size:22px;
            margin-top:15px;
        }

    }

    @media (min-width: 897px){
        h2{
            font-size:26px;            
            margin-top:15px;
        }
    }
`;

export const Cards = () => (
    
    <CardsStyles> 
        <Container>
            <div>
                <h2>How Dreamshare</h2>
            </div>
        </Container>
        <Container>
            <CardModule />
        </Container>                
        <Container>
            <CardsCarousel />                
        </Container>   
    </CardsStyles>

)
export default Cards