import styled from "styled-components";

export const PartnersStyles = styled.div `    
    justify-content: center;
    justify-items: center;
    text-align: center;
    a{
        text-decoration:none;        
    }
    a:hover{
        color:#999999;   
    }
  
    @media (max-width: 549px){
        .partnerTitle{

            h2{
                width:220px;                
                font-size:18px;
                margin-top:20px;
                font-weight: bold;
            }
        }        
        
        .cardStyle{
            margin-top:12px;            
                       
            img{
                width:100px;
            }

            .titleStyle{
                font-size:12px;
                font-weight: 700;
            }

            .textStyle{
                margin-top: 10px;
                font-size:10px;
                width: 200px;
                color: #666666;
                margin-bottom: 12px;
            }                     
          
        }  
    }

    @media (min-width: 550px){
        .partnerSession{
            margin-bottom:12px;
        }
  
        .partnerTitle{
            h2{                
                font-size:20px; 
                margin-top:20px;
             }
             span{
                 display:none;
             }
        }        
        
        .cardStyle{
            margin-top:12px;
            display: flex;            
                       
            img{
                width:100px;
            }

            .titleStyle{
                font-size:12px;
                font-weight: 700;                
            }

            .textStyle{
                margin-top: 10px;
                font-size:12px;
                width: 250px;
                color: #666666;
                margin-bottom: 12px;
                padding: 0 10px;
            }  
        }
    }

    @media (min-width: 800px){
        .partnerSession{
            margin-top:12px;           
            display: flex;
        }
  
        .partnerTitle{
            h2{                
                font-size:20px; 
                margin-top:20px;
             }
             span{
                 display:none;
             }
        }        
        
        .cardStyle{
            margin-top:12px;
                        
                       
            img{
                width:100px;
            }

            .titleStyle{
                font-size:12px;
                font-weight: 700;                
            }

            .textStyle{
                margin-top: 10px;
                font-size:12px;
                width: 200px;
                color: #666666;
                margin-bottom: 12px;
                padding: 0 10px;
            }  
        }
    }
    @media (min-width:975px){

        .cardStyle{
            .textStyle{
                width:250px;
            }
        }
    } 
`;


