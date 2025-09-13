import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" className="footer-logo" />
                    <p>"FoodX brings your favorite dishes from the best restaurants straight to your doorstep. Fresh, fast, and flavorful."</p >
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon}alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>CONTACT</h2>
                    <ul>
                        <li>+1234-5678-912</li>
                        <li>contact@foodx.com</li>
                      
                    </ul>

                </div>
            </div>
            <hr />
            <p className='footer-copyright'>"© 2025 FoodX. All rights reserved."</p>


        </div>
    )
}

export default Footer
