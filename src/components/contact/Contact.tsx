import React from "react";
import "./contact.css"
import {AiOutlineGithub, AiOutlineLinkedin, FiUsers, HiOutlineUsers, MdOutlineEmail} from "react-icons/all";

const Contact = () => {
    return (
        <>
            <section id='contact'>
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>

                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail className="contact__option-icon"/>
                            <h4>Email</h4>
                            <h5>wgpilaresc@gmail.com</h5>
                            <a href="mailto:wgpilaresc@gmail.com" target = "_blank">Send a message</a>
                        </article>
                        <article className="contact__option">
                            <FiUsers className="contact__option-icon"/>
                            <h4>Social</h4>
                            <a href="https://github.com/wpilares" target = "_blank"><AiOutlineGithub className="contact__option-icon2"/></a>
                            <a href="https://linkedin.com/in/wpilaresc"><AiOutlineLinkedin className="contact__option-icon2"/></a>
                        </article>

                    </div>
                    {/*<form action="">*/}
                    {/*    <input type="text" name="name" placeholder="Your Full Name" required/>*/}
                    {/*    <input type="email" name="email" placeholder="Your Email" required/>*/}
                    {/*    <textarea name="message" id="" rows={7} placeholder="Your Message" required></textarea>*/}
                    {/*    <button type="submit" className="btn btn-primary">Send Message</button>*/}
                    {/*</form>*/}
                </div>
            </section>
        </>
    )
}

export default Contact