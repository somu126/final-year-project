import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const first_name = useSelector(state => state.first_name)
    const last_name = useSelector(state => state.last_name)

    const handleLogOut = () => {
        sessionStorage.clear();
        navigate("/");
        dispatch({ type: "ISlOGGEDOUT", });
    }
    if (isLoggedIn) {
        return (
            <Fragment>
                <div className='headers'>
                    <div>
                        <h3 style={{color:'white', backgroundColor:'#0b4a99'}} className='secondary-heading px-2 py-2'><Link style={{color:'white'}} to="/">Online Chart Conversions</Link></h3>
                    </div>
                    <div>
                        <div className='header_right_cont'>
                            <ul className='list-inline d-flex mb-0'>
                                <li onClick={handleLogOut}>
                                    {first_name} {last_name}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <nav class="navbar navbar-expand-lg fixed-top">
                    <div class="container-fluid">
                        <div>
                            <div>
                            <h3 style={{color:'white', backgroundColor:'#0b4a99'}} className='secondary-heading bg-primary'><Link className='bg-primary' style={{color:'white'}} to="/">Online Chart Conversions</Link></h3>
                            </div>
                            <div>
                                <div className='header_right_cont'>

                                </div>
                            </div>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className='list-inline ms-auto d-flex mb-0'>
                            <li>
                                    <NavLink style={{color:'white'}} to="/graphs">
                                      
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink style={{color:'white'}} to="/login" className={({ isActive }) =>
                                        isActive ? "lactive-class" : "not-active-class"}>
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink style={{color:'white'}} to="/sign-up" className={({ isActive }) =>
                                        isActive ? "lactive-class" : "not-active-class"}>
                                        Sign up
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>


            </Fragment>
        )

    }
}

export default Header