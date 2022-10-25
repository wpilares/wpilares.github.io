import React from "react";
import "./about.css"

const About = () => {
    return (
        <>
            <section id='about'>
                <h5>Get to Know</h5>
                <h2>About Me</h2>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src="/src/assets/ME.jpg" alt ="About Image"/>
                        </div>
                    </div>

                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                            </article>
                        </div>

                        <p>
                            I’m passionate about creating and learning about technology, with high capacities in analysis and
                            solutions, a responsible person with initiative, creativity and punctuality, I gladly assume the
                            challenges and goals that may arise, with ease of teamwork and management of interpersonal
                            relationships, with the focus on achieving results.
                        </p>

                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About