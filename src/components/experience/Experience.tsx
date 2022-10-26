import React from "react";
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/all";

const Experience = () => {
    return (
        <>
            <section id='experience'>
                <h5>What Skills I Have </h5>
                <h2>My Experience</h2>

                <div className="container experience__container">
                    <div className="experience__promitia">
                        <h3>Promitia</h3>
                        <div className="experience__content">
                            <div className="experience__content-promitia">
                                <img src="/src/assets/images/promitia.png" alt ="About Image"/>
                            </div>
                            <article className="experience__subdetails">
                                <div className="experience__details">
                                    <BsPatchCheckFill className="experience__details-icon" />
                                    <div>
                                        <h4>Creation of web application and implementation of REST for Software Defined Networks (SDN) to
                                            perform analysis of network devices (routers/switches)</h4>
                                    </div>
                                    <BsPatchCheckFill className="experience__details-icon" />
                                    <div>
                                        <h4>Construction of a network infrastructure to perform server migration through Terraform and Digital
                                            Ocean, validating the correct creation of droplets and their applications</h4>
                                    </div>
                                </div>
                                <h4 className="text-light">Technologies: Node.js , React, NextJs, Docker, REST, Terraform, PostgreSQL, TypeORM</h4>
                            </article>
                        </div>
                    </div>

                    <div className="experience__claro">
                        <h3>America Móvil Perú</h3>
                        <div className="experience__content">
                            <div className="experience__content-claro">
                                <img src="/src/assets/images/claro.jpg" alt ="About Image"/>
                            </div>
                            <article className="experience__details">
                                {/*<BsPatchCheckFill className="experience__details-icon" />*/}
                                <div>
                                    <h4>Intern in the area of voice and data administration, related to the telecommunications and networks
                                        sector, analyzing KPIs as well as the optimal functioning of the network, where I perform
                                        automation of reports and configuration scripts</h4>
                                    <h4 className="text-light">Technologies: Python, HTML</h4>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Experience