import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className="footer_content">
            <div className="footer_content_left">
                  <img src={assets.logo} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio asperiores, eaque exercitationem earum eum modi consectetur ipsum dolorem repudiandae quos dolorum eligendi quasi ut perferendis vero. Numquam in perspiciatis quis.</p>
                  <div className="footer_social_icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                  </div>
            </div>
            <div className="footer_content_center">
                  <h2>COMPANY</h2>
                  <ul>
                     <li>Home</li>
                     <li>About us</li>
                     <li>Delivery</li>
                     <li>Privacy policy</li>
                  </ul>
            </div>
            <div className="footer_content_right">
                 <h2>GET IN TOUCH</h2>
                 <ul>
                     <li>+856 20 94883048</li>
                     <li>contacvt@tomato.com</li>
                 </ul>
            </div>
        </div>
        <hr />
        <p className="footer_copyright">
            Copyright &copy; 2021 All rights reserved | This template is made with Colorlib 
        </p>
    </div>
  )
}

export default Footer
