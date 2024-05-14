import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { _post } from '../services';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        _post("login", data)
            .then(data => {
                alert(data.message)
                sessionStorage.setItem("token", data.token)
                sessionStorage.setItem("first_name", data.user.first_name)
                sessionStorage.setItem("last_name", data.user.last_name)
                dispatch({ type: "ISLOGGEDIN", payload: data.user })
                navigate('/dashboard');
            })
            .catch(error => {
                return alert(error.response.data.message)
            })

    }
    return (
       
     <section className='py-5 log-in-bg' style={{height:'100vh', overflow:'hidden'}}>
     <div className='container pt-5'>
         <div className='row align-items-center'>
             <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                 <div className='my-2'>
                 <Fragment>
            <div className='login' style={{position:'relative', top:'50px'}}>
                <div className='login_content p-5 shadow rounded-5'>
                    <div className='text-center pb-2'>
                        <h4 className='text-start text-white'>Login to Complete the Survey</h4>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-2">
                            
                            <input
                                type="email"
                                className="form-control rounded-pill"
                                placeholder="E-mail"
                                name='email'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-2">
                           
                            <input
                                type="password"
                                className="form-control rounded-pill"
                                placeholder="Password"
                                name='password'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='submit_btn'>
                            <button className='btn btn-outline-light rounded-pill px-5 py-2 mt-3' >Login</button>
                        </div>
                        <p className='text-light mt-3'>Don't  have account <a href='/sign-up' className='text-light'>Click here</a> to Signup</p>
                        <p className='text-light mt-3'>
                            Visit Our  pages
                        </p>
                        <div className='d-flex justify-content-start'>
                            <div>
                                <a href=''>
                                    <i class="fa fs-4 text-white fa-facebook" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className='px-2'>
                                <a href=''>
                                    <i class="fa fs-4 text-white fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className='px-2'>
                                <a href=''>
                                    <i class="fa fs-4 text-white fa-twitter" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className='px-2'>
                                <a href=''>
                                    <i class="fa fs-4 text-white fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className='px-2'>
                                <a href=''>
                                    <i class="fa fs-4 text-white fa-youtube" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
           
        </Fragment>
                 </div>
             </div>
             {/* end of the first col */}
           
         </div>
     </div>
 </section>
    )
}

export default Login