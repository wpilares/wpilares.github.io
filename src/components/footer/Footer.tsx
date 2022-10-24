import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <>
            <footer>

                <a href="#" className="footer_logo">WILLBER GUILLERMO PILARES CHOCCARE</a>
                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className = "footer__copyright"></div>
                <small>&copy; 2022 Willber Guillermo Pilares Choccare </small>

            </footer>
        </>
    )
}

export default Footer