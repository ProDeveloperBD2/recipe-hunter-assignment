import React, { useContext, useRef, useState } from 'react';
import LoginFormVideo from '../../assets/LoginFormVideo.json'
import Lottie from 'lottie-react/build';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signInUser, resetProfilePassword } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/chef';
    const navigate = useNavigate();
    const emailRef = useRef()
    const handleLoginSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(`
        Email: ${email}
        Password: ${password}
        `)
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
            })

    }
    const handleResetPassword = event => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please Enter Your Email');
            return;
        }
        resetProfilePassword(email)
            .then(result => {
                alert('Please Check Your Email')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className='w-75 d-flex align-items-center mx-auto mt-5 mb-5'>
            <div className='w-100 p-4' style={{ backgroundColor: '#96F796' }}>
                <h2 className='text-center text-white'>Please Login !|!</h2>
                <form onSubmit={handleLoginSubmit}>
                    <label>Email</label><br />
                    <input ref={emailRef} className='w-100 mb-2 px-1' style={{ fontSize: '20px' }} type="email" name="email" id="email" placeholder='Email' required />
                    <br />
                    <label>Password</label><br />
                    <input className='w-100 mb-2 px-1' style={{ fontSize: '20px' }} type={showPass ? "text" : "password"} name="password" id="password" placeholder='Password' required />
                    <br />
                    <Form.Check onClick={() => setShowPass(!showPass)}
                        className='mt-2' type="checkbox" name="checkbox" id="checkbox" label={<>Show Password</>} />
                    <p className='mt-2'>Forget Password? Please <Link className='fw-semibold' style={{ color: '#F0FAF1' }} onClick={handleResetPassword}>Reset Password</Link></p>
                    <button className='w-100 text-white py-2 fw-bold mt-3' style={{ border: 'none', backgroundColor: 'black' }}>Login</button>
                </form>
                <p className='text-center mt-3'>Dont’t Have An Account ? <Link to="/register" className='fw-semibold' style={{ color: '#F0FAF0' }}>Register</Link></p>
            </div>
            <div className='w-100'>
                <Lottie className='w-100 h-100' animationData={LoginFormVideo} />
            </div>
        </div>
    );
};

export default Login;