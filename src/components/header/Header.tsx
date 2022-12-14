import React from "react";
import "./header.css";
import CTA from './CTA';
import me from '/src/assets/images/me.png';

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
                        <img src={me} alt="me"/>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header