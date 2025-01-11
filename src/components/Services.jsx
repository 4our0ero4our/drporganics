import HumanHealthImg from '../Assets/Images/HumanHealthImg.jpg';
import FertilitySolutionsImg from '../Assets/Images/FertilitySolutionsImg.jpeg';
import AnimalCareHerbs from '../Assets/Images/AnimalCareHerbs.webp';
import BouquetGarni1 from '../Assets/Images/A_Bouquet_Garni_Image-removebg-preview.png';
import PeppperMintFlower from '../Assets/Images/Peppermint flower.jpeg';
import DillLeaf from '../Assets/Images/Dill Leaf.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <section id='services' className='services'>
            <div className='from-top' data-aos="fade-down">
                <h1>Services We Offer</h1>
            </div>
            <div className='service1 service' data-aos="fade-up">
                <div className='service-info'>
                    <div>
                        <h1>Human Health</h1>
                        <p>
                            From chronic ulcers to kidney diseases and diabetes, we treat a wide array of conditions naturally
                        </p>
                    </div>
                    <div className='efgh'>
                        <div className='abcd'></div>
                        <img className='service-featured-image' src={HumanHealthImg} alt="" />
                    </div>
                </div>
                <img className='service-featured-image ijkl' src={HumanHealthImg} alt="" />
                <img src={BouquetGarni1} className='featrured-leaf' alt="" />
            </div>
            <div className='service2 service'>
                <img src={PeppperMintFlower} className='featrured-leaf' data-aos="fade-up" alt="" />
                <div className='service-info' data-aos="fade-up">
                    <div>
                        <h1>Fertility Solutions</h1>
                        <p>
                            Helping you overcome infertility, low sperm count, and other reproductive issues.
                        </p>
                    </div>
                    <div className='efgh'>
                        <div className='abcd'></div>
                        <img className='service-featured-image' src={FertilitySolutionsImg} alt="" />
                    </div>
                </div>
                <img className='service-featured-image ijkl' src={FertilitySolutionsImg} alt="" />
            </div>
            <div className='service3 service' data-aos="fade-up">
                <div className='service-info'>
                    <div>
                        <h1>Animal Care</h1>
                        <p>
                            Providing organic livestock treatment and consultations for animal health.
                        </p>
                    </div>
                    <div className='efgh'>
                        <div className='abcd'></div>
                        <img className='service-featured-image' src={AnimalCareHerbs} alt="" />
                    </div>
                </div>
                <img className='service-featured-image ijkl' src={AnimalCareHerbs} alt="" />
                <img src={DillLeaf} className='featrured-leaf' alt="" />
            </div>
        </section>
    )
}

export default Services;