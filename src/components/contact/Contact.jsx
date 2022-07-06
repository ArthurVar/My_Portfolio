import React from "react";
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {TbBrandTelegram} from 'react-icons/tb'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_4xay9in', 'template_qchmktc', form.current, 'K4ReGf1cBO4Vnqa0D')
        e.target.reset()
    }

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>arturvardanyan3637@gmail.com</h5>
                        <a href="mailto:arturvardanyan3637@gmail.com" target='_blank'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Artur Vardanyan</h5>
                        <a href="https://www.facebook.com/profile.php?id=100081465957755" target='_blank'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <TbBrandTelegram className="contact__option-icon"/>
                        <h4>Telegram</h4>
                        <h5>+37493013637</h5>
                        <a href="#" target='_blank'>Send a message</a>
                    </article>
                </div>
                
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name="name" placeholder="Your Full Name" required/>
                    <input type='email' name="name" placeholder="Your Email" required/>
                    <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;