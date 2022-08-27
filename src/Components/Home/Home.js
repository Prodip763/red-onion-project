import React from "react";
import { Link } from 'react-router-dom'
import useData from "../../hooks/useData/useData";
import './Home.css';
import Banner from "./Home/Banner/Banner";
import Shop from "./Home/Shop/Shop";


const Home = () => {
    const [datas, setdatas] = useData();
    return (
        <div>
            <Banner></Banner>
                <Link to='/breakfast' style={{ color: 'red', textDecoration: 'none', paddingLeft: 13, alignItems:'center',fontSize: 'large', marginTop: '5px' }}>Breakfast</Link>
                <Link to='/lunch' style={{ color: 'red', textDecoration: 'none', paddingLeft: 13, alignItems:'center',fontSize: 'large', marginTop: '5px' }}>Lunch</Link>
                <Link to='/dinner' style={{ color: 'red', textDecoration: 'none', paddingLeft: 13, alignItems:'center',fontSize: 'large', marginTop: '5px' }}>Dinner</Link>
                <Shop></Shop>
        </div>
    );
};

export default Home;

