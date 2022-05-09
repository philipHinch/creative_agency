//images
import sugar from '../assets/images/sugar_pink.jpg';
import milk from '../assets/images/milk_yellow.jpg';
import lemon from '../assets/images/lemon_blue.jpg';
import cone from '../assets/images/cone_blue.jpg';
//icons
import { Icon } from '@iconify/react';


const Footer = () => {
    return (
        <footer>
            <div className="footerImagesContainer">
                <div className="footerImage footerImage1">
                    <img src={cone} alt="cone image" />
                </div>
                <div className="footerImage footerImage3">
                    <img src={milk} alt="cone image" />
                </div>
                <div className="footerImage footerImage2">
                    <img src={lemon} alt="cone image" />
                </div>
                <div className="footerImage footerImage4">
                    <img src={sugar} alt="cone image" />
                </div>
            </div>
            <div className="footerBodyContainer">
                <h2 className="footerHeader">
                    sunnyside &#9728;
                </h2>
                <ul className="footerLinkContainer">
                    <li className="footerLink">About</li>
                    <li className="footerLink">Services</li>
                    <li className="footerLink">Projects</li>
                </ul>
                <ul className="footerSocialContainer">
                    <li className="footerSocialLink"><Icon className='socialIcon' icon="fa6-brands:facebook-square" />
                    </li>
                    <li className="footerSocialLink"><Icon className='socialIcon' icon="fa6-brands:instagram-square" />
                    </li>
                    <li className="footerSocialLink"><Icon className='socialIcon' icon="fa6-brands:twitter-square" />
                    </li>
                    <li className="footerSocialLink"><Icon className='socialIcon' icon="fa6-brands:pinterest-square" />
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;