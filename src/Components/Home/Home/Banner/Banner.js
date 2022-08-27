import { Button } from "react-bootstrap";
import './Banner.css';
import React from "react";
import banner from "../../../../images/bannerbackground.png"



const Banner = () => {
    return (
        <div className='d-block mx-auto'style={{backgroundImage: `url(${banner}`, backgroundSize:'100%', height:'300px'}}>
            <h1 className="font-bold text-center fst-italic pt-5">Best food waiting for your belly</h1>
                <input className="rounded border-0 mt-4 " type="search" placeholder="Search food items" />
                <Button variant="danger">Sign Up</Button>
            
        </div>
    );
};

export default Banner;



