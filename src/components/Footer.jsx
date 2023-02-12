import React from 'react';
import "./css/Footer.css";
import behance from "./icon/behance.svg"
import facebook from "./icon/facebook.svg"
import instagram from "./icon/instagram.svg"
import telegram from "./icon/telegram.svg"
import watsapp from "./icon/watsapp.svg"


export default function Footer() {
    
  return (
    
    <div className="footer">
        <div className="social-icons">
            <div className="telegram-href">
                <a href="https://telegram.org/" target="_blank" rel="noopener">
                    {/* <img src={telegram} alt="telegram" width="26px" height="26px"></img> */}
                    <img src={require("./icon/telegram.png")} alt="instagram" width="26px" height="26px"></img>
                </a>
            </div>

            <div className="instagram-href">
                <a href="https://instagram.com/kate_needle_" target="_blank" rel="noopener">
                    {/* <img src={instagram} alt="instagram" width="26px" height="26px"></img> */}
                    <img src={require("./icon/instagram.png")} alt="instagram" width="26px" height="26px"></img>
                </a>
            </div>

            <div className="facebook-href">
                <a href="https://facebook.com/" target="_blank" rel="noopener">
                    {/* <img src={facebook} alt="facebook" width="26px" height="26px"></img> */}
                    <img src={require("./icon/facebook.png")} alt="facebook" width="26px" height="26px"></img>
                </a>
            </div>

            <div className="behance">
                <a href="https://behance.com/" target="_blank" rel="noopener">
                    {/* <img src={behance} alt="behance" width="26px" height="26px"></img> */}
                    <img src={require("./icon/behance.png")} alt="behance" width="26px" height="26px"></img>
                </a>
            </div>

            <div className="watsapp-href">
                <a href="https://wa.me/00000000"/*{ЗАМЕНИТЬ НОМЕР ТЕЛЕФОНА}*/ target="_blank" rel="noopener">
                    {/* <img src={watsapp} alt="watsapp" width="26px" height="26px"></img> */}
                    <img src={require("./icon/watsapp.png")} alt="watsapp" width="26px" height="26px"></img>
                </a>
            </div>
        </div>
        <div className="footer-text">
            <p align = "center">&copy;2023 Kate_needle. Открыта к сотрудничеству и предложениям.</p>
            <p align = "center">Тель-Авив</p>
        </div>
    </div>
  )
}
