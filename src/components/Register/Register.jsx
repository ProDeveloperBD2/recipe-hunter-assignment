import Lottie from 'lottie-react/build';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterFormVideo from '../../assets/RegisterFormVideo.json'
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider';
const Register = () => {
    const { createUser, userProfileUpdate,emailVarification } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate()
    const handleRegisterSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(`
        Name: ${name}
        Photo URL: ${photo}
        Email: ${email}
        Password: ${password}
        `)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                updateUserProfile(result.user, name, photo)
                userEmailVarification(result.user)
                navigate('/login')
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
            })
        const updateUserProfile = (user, name, photo) => {
            userProfileUpdate(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    console.log('user update success')
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
        const userEmailVarification = user =>{
            emailVarification(user)
            .then(
                alert('Check Your Email Box and Varification Your Email')
            )
            .catch(error=>{
                console.log(error.message)
            })
        }
    }
    return (
        <div className='w-75 d-flex align-items-center mx-auto mt-5 mb-5'>
            <div className='w-100 p-4' style={{ backgroundColor: '#96F796' }}>
                <h2 className='text-center text-white'>Please Register !|!</h2>
                <form onSubmit={handleRegisterSubmit}>
                    <label>Name</label><br />
                    <input className='w-100 mb-2 px-1' style={{ fontSize: '20px' }} type="text" name="name" id="name" placeholder='Name' required />
                    <br />
                    <label>Photo URL</label><br />
                    <input className='w-100 mb-2 px-1' style={{ fontSize: '20px' }} type="text" name="photo" id="photo" placeholder='Photo URL' required />
                    <br />
                    <label>Email</label><br />
                    <input className='w-100 mb-2 px-1' style={{ fontSize: '20px' }} type="email" name="email" id="email" placeholder='Email' required />
                    <br />
                    <label>Password</label><br />
                    <input className='w-100 mb-2 px-1' style={{ fontSize: '20px' }} type={showPass ? "text" : "password"} name="password" id="password" placeholder='Password' required />
                    <br />
                    <Form.Check onClick={() => setShowPass(!showPass)} className='mt-2' type="checkbox" name="checkbox" id="checkbox" label={<>Show Password</>} />
                    <button className='w-100 text-white py-2 fw-bold mt-4' style={{ border: 'none', backgroundColor: 'black' }}>Register</button>
                </form>
                <p className='text-center mt-3'>Already Have An Account ? <Link to="/login" className='fw-semibold' style={{ color: '#F0FAF0' }}>Login</Link></p>
            </div>
            <div className='w-100'>
                <Lottie animationData={RegisterFormVideo}></Lottie>
            </div>
        </div>
    );
};

export default Register;