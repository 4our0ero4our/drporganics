import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import serviceImg from '../Assets/Images/A_Bouquet_Garni_Image-removebg-preview.png'
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const [paginationState, setPaginationState] = useState(1);

    const reasons = [
        '  Proven track record with a wide range of conditions, from common ailments to chronic diseases, with a success rate that speaks for itself.',
        '  Tailored treatments for human and animal health, taking into account individual needs, lifestyles, and circumstances to ensure optimal results.',
        '  Guided by tradition, science, and faith, our approach combines the best of ancient wisdom with modern research and a deep understanding of the interconnectedness of body, mind, and spirit.'
    ]
    return (
        <div className='why-us-section' id="whyus">
            <div className='text-and-cta' data-aos="fade-up">
                <h1>Why Dr P. Organic Consults?</h1>
                <p>
                    Dr P. Organics consults is a trusted name in organic products, offering a wide range of natural and sustainable solutions for a healthier lifestyle.
                </p>
                <Link to={'#consultus'}><button>Learn more</button></Link>
            </div>
            <div className="reasons" data-aos="fade-up">
                <img src={serviceImg} alt="" />
                <p>
                    <FaQuoteLeft />
                    {reasons[paginationState]}
                    <FaQuoteRight />
                </p>
                <div className="whyus-pagination-btn">
                    <button onClick={() => setPaginationState(paginationState > 0 && paginationState - 1)} disabled={paginationState === 0}><FaChevronLeft className={paginationState === 0 && 'disabled'} /></button>
                    <button onClick={() => setPaginationState(paginationState < reasons.length - 1 && paginationState + 1)} disabled={paginationState === reasons.length - 1}><FaChevronRight className={paginationState === reasons.length - 1 && 'disabled'} /></button>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;