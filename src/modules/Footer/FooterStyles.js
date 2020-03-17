import styled from "styled-components";

export const FooterStyle = styled.div` 
    justify-content: center;
    text-align: center;
    border-top: 2px solid #FF4E50;
    padding-top:20px;
    max-width: 100%;
    bottom: 0;    

    .footer{
      @media (min-width: 550px){
        display:flex;
        justify-content:space-around;
      }

    }

    .footer_logo{
      color: #FF4E50;
      
      @media (max-width: 549px){
        margin-bottom:10px;
        font-size:13px;
        margin-right:0px;
      }
      @media (min-width: 550px){        
        margin-top:20px;
        font-size:16px;
        margin-right: 50px;
      }
    }
  
    .footer_map{        
      margin-top: 10px;

      .footer_title_bold{
        font-weight: 600;
        text-align:left;
        margin-top:20px;

        @media (max-width: 549px){
          text-align:center;
        }
      }
      @media (max-width: 549px) {                 
        p{  
            margin-bottom: 5px;
            font-size:10px;           
        }
      }

    @media (min-width: 550px ){
      p{          
         margin-top:10px;
          font-size:14px;           
        }
      }    
    }
    
    .footer_map_links{     
      @media (min-width: 549px){
        display: flex; 
        justify-content: space-around;                    
      }

      @media (min-width: 550px){         
        display: flex; 
        justify-content: space-around; 
        text-align:left;
      }        
    }

    .footer_map_flex{
        @media (max-width: 549px){
          display: flex; 
          justify-content: center; 
        }
      }      
 
     .footer_link{
      text-decoration:none;
      color: #999999;
      font-weight: 100;
      cursor:pointer;
      &:hover{
        color:#FF4E50;
      }
      
        @media (max-width: 549px){      
          padding: 3px 0px 0px 8px;
          font-size:11px;
      }
        @media (min-width: 550px){
          padding: 0px 80px 0px 10px;
          font-size:12px;        
      }
    }

    .footer_brand{
      @media (max-width: 500px){
        width: 120px;
        margin-top: 10px;
      }
    }  
`;
