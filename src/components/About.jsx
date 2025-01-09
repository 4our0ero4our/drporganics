import AboutUsImg4 from '../Assets/Images/AboutUsImg4.jpeg';
import AboutUsImg2 from '../Assets/Images/AboutUsImg2.jpg';
import FreshLeaf from '../Assets/Images/A fresh Leaf Edited.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <section className="about" id="about">
            <div className='what-we-do' data-aos="fade-right">
                <h1>What We do at <br />Dr. P Organic Consults</h1>
                <p>
                    We provide effective treatment for conditions such as Chronic ulcers, Kidney Diseases, Fibroid, Hypertension, Diabetes, Parkinson's Disease, HIV, and Sickle Cell Anemia, among others. With Allah’s Mercy, we guarantee positive results tailored to your needs.
                </p>
                <img src={AboutUsImg4} alt="Fresh leaves" />
            </div>
            <img className='about-fresh-leaf' src={FreshLeaf} alt="A fresh Leaf" />
            <div className='about-us' data-aos="fade-left">
                <div>
                    <h2>About Us</h2>
                    <p>
                        We are a Nigerian company dedicated to manufacturing herbal medicines for various human health challenges. Our remedies are natural, effective, and tailored to ensure the well-being of our clients. From chronic illnesses to general health concerns, we provide a trusted pathway to healing.
                    </p>
                </div>
                <img src={AboutUsImg2} alt="Herbs beign grown in vase" />
            </div>
        </section>
    )
}

export default About;