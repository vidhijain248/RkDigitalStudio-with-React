import React from "react";
import "./Footer.css";
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color:"#fff", marginRight:"2rem"}}/>
                        <div style={{color:'#fff', marginRight: "2rem"}}>
                            <p>Near Bus Stand.</p>
                            <p>keshoraipatan,Bundi</p>
                        </div>
                    </div>
                    <div className="phone">
                       <h4 style={{color:'#fff', marginRight: "2rem"}}> <FaPhone size={20} style={{color:'#fff', marginRight: "2rem"}}/>
                        8769671068 </h4>
                    </div>
                    <div className="email">
                       <h4 style={{color:'#fff', marginRight: "2rem"}}> <FaMailBulk size={20} style={{color:'#fff', marginRight: "2rem"}}/>
                        vhr1317@gmail.com </h4>
                    </div>
                </div>

                <div className="right" style={{color:'#fff'}}>
                    <h4>About Us</h4>
                    <p>RK studio is top services provider and market leader in wedding, film and music industry we provide professional services in the best price We have a Big team of Videographers and Photographers.</p>
                    <div className="social">
                    <FaFacebook size={30} style={{ color:"#fff", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{ color:"#fff", marginRight:"1rem"}}/>
                    <FaInstagram size={30} style={{ color:"#fff", marginRight:"1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
