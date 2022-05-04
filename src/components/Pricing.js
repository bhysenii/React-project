import React from 'react'
import { Link } from 'react-router-dom';
import { IoLogoJavascript } from 'react-icons/io';
import { Button } from './Button';
import { } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';

function Pricing() {
    return (
        <IconContext.Provider value={{color: '#fff' , size: 64}}>
        <div>
            <div className='pricing_section'>
                <div className='pricing_wrapper'>
                    <h1 className='pricing_heading'></h1>
                    <div className='pricing_container'>
                        <Link to='/sign-up' className='pricing_container-card'>
                            <div className='pricing_container-cardInfo'>
                                <div className='icon'>
                                    <IoLogoJavascript />
                                </div>
                                <h3>Starter</h3>
                                <h4>9.99$</h4>
                                <p>For one Month</p>
                                <ul className='pricing_container_features'>
                                    <li>Learn Javascript</li>
                                    <li>Learn React.js</li>
                                    <li>Learn Next.js</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                            </div>
                        </Link>

                        <Link to='/sign-up' className='pricing_container-card'>
                            <div className='pricing_container-cardInfo'>
                                <div className='icon'>
                                    <IoLogoJavascript />
                                </div>
                                <h3>Starter</h3>
                                <h4>9.99$</h4>
                                <p>For one Month</p>
                                <ul className='pricing_container_features'>
                                    <li>Learn Javascript</li>
                                    <li>Learn React.js</li>
                                    <li>Learn Next.js</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                            </div>
                        </Link>

                        <Link to='/sign-up' className='pricing_container-card'>
                            <div className='pricing_container-cardInfo'>
                                <div className='icon'>
                                    <IoLogoJavascript />
                                </div>
                                <h3>Starter</h3>
                                <h4>9.99$</h4>
                                <p>For one Month</p>
                                <ul className='pricing_container_features'>
                                    <li>Learn Javascript</li>
                                    <li>Learn React.js</li>
                                    <li>Learn Next.js</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
