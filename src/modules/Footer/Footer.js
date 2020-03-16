import React from "react";
import { FooterLayout} from "./FooterStyles";
import LogoSrc from "../images/aretologo.png"




export default function Footer() {
  return (
      <FooterLayout>
            <div className="footer">
                <div className="footer_logo">
                    <p>DREAMSHARE</p>
                </div>
                <div className="footer_map">
                    <p className="footer_title_bold">Company</p>
                    <div className="footer_map_links">
                        <div className="footer_map_flex">
                            <p className="footer_link" >About</p>
                            <p className="footer_link" >Contact</p>
                            <p className= "footer_link" >Press</p>
                        </div>
                        <div className="footer_map_flex">
                            <p className= "footer_link" >Blog</p>
                            <p className= "footer_link" >Terms and Privacy</p>
                            <p className= "footer_link" >Help</p>
                        </div>                       
                    </div>             
                </div>
                <div>
                    <img className="footer_brand" src={LogoSrc} alt = "logo designed by areto"></img>  
                </div>
            </div>
        </FooterLayout>
  );
}
