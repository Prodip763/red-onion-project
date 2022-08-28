import React from "react";
import { Form, Button } from "react-bootstrap";
import logo from '../../../images/logo.png'

const Login = () => {
    return (
        <div className="container w-50 mx-auto">
            <img className="w-50 mt-2 mx-auto d-block mb-4" src={logo}></img>
            
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control  type="password" placeholder="Password" required />
                </Form.Group>

                <Button className="w-50 mx-auto btn btn-danger" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            
            {/* <p>New to Genius Car? <Link to='/register' onClick={navigateRegister} className="text-primary pe-auto text-decoration-none ">Please Register</Link></p> */}
            {/* <p>Forget Password? <button onClick={resetPassword} className="btn btn-link text-primary pe-auto text-decoration-none ">Reset Password</button></p> */}

            {/* <SocialLogin></SocialLogin>
            <ToastContainer /> */}
        </div>
    );
};


export default Login;