import { useEffect } from 'react'
import { CgMail } from 'react-icons/cg';
import { IoCall } from 'react-icons/io5';
import { FaLeaf, FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    useEffect(() => {
        // Load the X (Twitter) embed script dynamically
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);

        return () => {
            // Cleanup script if the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <footer className='footer'>
            <div className='footer-top-container'>
                <div className='footer-texts' data-aos='fade-right'>
                    <div className='footer-quick-links'>
                        <a href="#about">About Us</a>
                        <a href="#services">Services</a>
                        <a href="consultus">Consult Us</a>
                        <a href="#whyus">Why Us</a>
                    </div>
                    <div className='footer-contact-info'>
                        <p><CgMail /> <a href="mailto:drporganicconsults@gmail.com">Mail us</a></p>
                        <p><IoCall /> <a href="tel:+2349747294299">Give us a call</a></p>
                        <p>Cele Area, Isokun Titun, <br /> Oyo, Oyo State</p>
                    </div>
                </div>
                <div data-aos="flip-left">
                    <blockquote
                        className="twitter-tweet"
                        data-theme="light"
                    >
                        <p lang="en" dir="ltr">
                            Afiyah means well-being. Asking Allah for Afiyah means to be saved
                            from Distress, Grief, Hardship, Test, and all pain and suffering in
                            both this world and the hereafter. All of this is included in the
                            short but beautiful dua:
                            <br />
                            <br />
                            “Allahumma inni As’ Aluka Al’Afiyah”
                        </p>
                        &mdash; Dr.P Organic Consults (@ahlus_tv){" "}
                        <a href="https://twitter.com/ahlus_tv/status/1779162095784792541?ref_src=twsrc%5Etfw">
                            April 13, 2024
                        </a>
                    </blockquote>
                </div>
            </div>
            <div className='footer-socials'>
                <p>&copy; {new Date().getFullYear()} Dr. P Organic Consults. All Rights Reserved.</p>
                <div>
                    <a href=""><FaSquareInstagram /></a>
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaXTwitter /></a>
                    <a href=""><IoLogoYoutube /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;