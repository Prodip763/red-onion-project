import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../../images/logo.png'
import './Signup.css';
import auth from '../../../firebase.init';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate();

      const navigateLogin =() =>{
        navigate('/login')
      }
      if(user){
        navigate('/home');
      }

      const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        createUserWithEmailAndPassword(email, password);
      }
    return (
        <div className="register-form">
            <img className="w-50 mt-2 mx-auto d-block mb-4" src={logo}></img>
            <form onSubmit={handleRegister}>
                <input type='text' name='name'  placeholder='Your Name'></input>
                <input type='email' name='email'  placeholder="Enter Your Email" required></input>              
                <input type='password' name="password"  placeholder="Enter Your Password" required></input> 
                <input  type='checkbox' name='terms' id='terms'></input>
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept car-services Terms and Conditions</label> */}
                <label  htmlFor="terms">Accept red-onion Terms and Conditions</label>
                <input  className="w-50 mx-auto btn btn-danger mt-2" type='submit' value="Register"></input>
            </form>
            <p>Alredy have an account? <Link to='/login'  className="text-primary pe-auto text-decoration-none " onClick={navigateLogin}>Please Login</Link></p>
            
        </div>
    );
};


export default Signup;