// import HerbPlants1 from '../Assets/Images/HerbPlants1.jpg';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaLeaf } from "react-icons/fa";
import { TiLeaf } from 'react-icons/ti';
import { useState, useEffect } from 'react';
import { MdCancel } from 'react-icons/md';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const imageRoutes = ['HerbPlants1.jpg', 'HerbPlants2.jpg', 'HerbPlants3.jpg'];

const Hero = () => {
    const [openNav, setOpenNav] = useState(false);
    const [imagePosition, setImagePosition] = useState(1);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setImagePosition((prevPosition) => {
                if (prevPosition === 3) return 1;
                return prevPosition + 1;
            });
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section id='about' style={{ backgroundImage: `url(${require(`../Assets/Images/${imageRoutes[imagePosition - 1]}`)})`, transition: 'all 1s ease' }} className="hero">
            <div className='hero-overlay'></div>
            <nav className='desktop-nav' data-aos="fade-down">
                <h1 className='logo organics-text'>Dr P. <span>Organics</span> <FaLeaf style={{ color: "rgb(0, 255, 0)" }} /></h1>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#whyus">Why Us</a></li>
                    <li><a href="#consultus">Consult Us</a></li>
                </ul>
            </nav>
            <nav className='mobile-nav' data-aos="fade-down">
                {openNav ? '' : <h1 className='logo organics-text'>Dr P. <span>Organics</span> <FaLeaf style={{ color: "rgb(0, 255, 0)" }} /></h1>}
                {openNav ? '' : <TiLeaf className='swing' onClick={() => { setOpenNav(true) }} />}
                {openNav ?
                    <ul>
                        <MdCancel className='cancel-btn' onClick={() => setOpenNav(false)} />
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#whyus">Why Us</a></li>
                        <li><a href="#consultus">Consult Us</a></li>
                    </ul>
                    :
                    ''
                }

            </nav>
            <div className='hero-socials' data-aos="fade-left" data-aos-duration="500">
                <div className='hero-social-line-top'></div>
                <Link><FaSquareInstagram /></Link>
                <Link><FaFacebookF /></Link>
                <Link><FaXTwitter /></Link>
                <Link><IoLogoYoutube /></Link>
                <div className='hero-social-line-bottom'></div>
            </div>
            <div className="hero-content" data-aos="fade-up">
                <h1>Empowering Your Health <span className="organics-text"> Naturally</span></h1>
                <p>
                    Discover the healing power of our herbal medicines, made from 100%
                    natural ingredients for a wide range of human and animal health challenges.
                </p>
                <a href="#consultus">
                    <button>Consult us</button>
                </a>
            </div>
            <div className='image-indicator'>
                <div style={{ backgroundColor: imagePosition === 1 ? '#fff' : '#6e6e6e', width: imagePosition === 1 ? '15px' : '10px', height: imagePosition === 1 ? '15px' : '10px', margin: '0 auto', borderRadius: "50%", transition: 'all 1s ease' }}></div>
                <div style={{ backgroundColor: imagePosition === 2 ? '#fff' : '#6e6e6e', width: imagePosition === 2 ? '15px' : '10px', height: imagePosition === 2 ? '15px' : '10px', margin: '0 auto', borderRadius: "50%", transition: 'all 1s ease' }}></div>
                <div style={{ backgroundColor: imagePosition === 3 ? '#fff' : '#6e6e6e', width: imagePosition === 3 ? '15px' : '10px', height: imagePosition === 3 ? '15px' : '10px', margin: '0 auto', borderRadius: "50%", transition: 'all 1s ease' }}></div>
            </div>
        </section >
    )
}

export default Hero;