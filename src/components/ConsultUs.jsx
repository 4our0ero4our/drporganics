import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ConsultUs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log('Message sent!', result.text);
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <section className="optIn-div" id="optIn">
            <div className="optIn" data-aos="zoom-in">
                <h1>Consult Dr P. Organics</h1>
                <div className="border"></div>
                <p>Contact us today to find the right treatment for you or your loved ones</p>
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <input type="text" name="senderfirst_name" placeholder="First Name" required />
                        <input type="text" name="senderlast_name" placeholder="Last Name" required />
                    </div>
                    <div>
                        <input type="email" name="sender_mail" placeholder="Email" required />
                        <input type="text" name="sender_mobile" placeholder="Phone Number" required />
                    </div>
                    <input type="text" name="complaint_subject" placeholder="Subject" required />
                    <textarea name="message" placeholder="Tell Us Something..." required />
                    <button type="submit">Consult Us</button>
                </form>
            </div>
        </section>
    );
};

export default ConsultUs;
