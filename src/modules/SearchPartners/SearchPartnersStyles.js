import styled from "styled-components";

export const SearchPartnersStyle = styled.div `  
    margin-top: 10px;    
    justify-content: center;
    text-align: center;
    
    a{
        text-decoration:none;
        
    }
    a:hover{
            color:#F7F3F2;
        }


    @media (max-width: 549px){
        margin-bottom: 25px;
                                
        .description{   
            margin-top: 50px;        
           
            h2{
                font-weight: 900;
                text-align: center;                
                font-size:16px;               
                width:200px;                
               
            } 
            p{
                color: #666666;
                font-size:10px;
                margin-top:10px;
                margin-bottom:10px;
            }       
        }       

        .formMobile{
            font-size:8px;
            padding: 7px 5px 7px;
            border: 1px solid #CCCCCC;
            border-radius:2px;            
            width: 185px;
            font-family: 'Montserrat', sans-serif; 
                
            ::-webkit-input-placeholder { 
                color: #CCCCCC;   
            }
        }   

    }


    @media (min-width: 550px){       
        margin-bottom: 100px;
        
        h2{
            font-weight: bold;
            font-size:22px;
            margin:35px;
            span{
                display:none;
            }
        }
        P{
            color: #666666;
            font-size:16px;
        }
        .formMobile{
            display:none;
        }
    } 
 
    @media (min-width: 800px){
        margin-top:80px;

    }  
   
`;


export const InputStyle = styled.form `

    form input{   
        font-family: 'Montserrat', sans-serif; 
        display:block;
        ::-webkit-input-placeholder { 
            color: #CCCCCC;   
        }

        @media (max-width: 549px){
            display:none;  
        }     

        @media (min-width: 550px){
                font-size:13px;
                padding: 5px 5px 10px 10px;
                border: 1px solid #CCCCCC; 
                border-radius: 2px;           
                width: 270px;  
                margin-right:10px;  
            }     
        }    
`;