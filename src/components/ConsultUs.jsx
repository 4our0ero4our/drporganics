import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ConsultUs = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);
    return (
        <section className='optIn-div' id='optIn' data-aos="fade-up">
            <div className='optIn'>
                <h1>Consult Dr P. Organics</h1>
                <div className='border'></div>
                <p>Contact us today to find the right treatment for you or your loved ones</p>
                <form action="">
                    <div>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div>
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Phone Number' />
                    </div>
                    <input type="text" placeholder='Subject' />
                    <textarea placeholder='Tell Us Something...'></textarea>
                    <button>Consult Us</button>
                </form>
            </div>
        </section>
    )
}

export default ConsultUs;