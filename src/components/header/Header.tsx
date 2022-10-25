import React from "react";
import "./header.css"
import CTA from './CTA'

const Header = () => {
    return (
        <>
            <header>
                <div className="container header__container">
                    <h5>Hello I'm</h5>
                    <h1>WILLBER PILARES</h1>
                    <h5 className="text-light">Software Developer</h5>
                    <CTA/>

                    <div className="me">
                        <img src="/src/assets/me.jpg" alt="me"/>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header