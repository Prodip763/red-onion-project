import React from "react";
import logo from '../../../../images/logo.png'

const Footer = () => {
    return (
        <footer className=" mb-1 mt-5 bg-dark d-flex justify-content-between grid-template-columns: 1fr 2fr;">
            <img className="w-25 h-25" src={logo}></img>
            <div className="d-flex gap-5 text-light mt-5">
                <div>
                    <small>
                        <p>About Online food</p>
                        <p>Read our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </small>
                </div>
                <div>
                    <small>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all clients</p>
                        <p>Restaurant near me</p>
                    </small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;