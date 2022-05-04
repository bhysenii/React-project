import React from 'react'
import useSignup from './useSignup'
import validate from './validateInfo';
import './sign.css';
            
const Data = ({submitSignUp}) => {
    const { handleChange, handleSubmit ,values, errors} = useSignup(submitSignUp, validate);
    return (
        <div className='form-content'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>Create Your Account</h1>
                <div className='input '>
                    <label htmlFor='username' className='label'>Username</label>
                    <input type='text' name='username' className='form-inputs' placeholder='Enter your username'
                    value={values.username}
                    onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='input'>
                    <label htmlFor='email' className='label'>Email</label>
                        <input type='email' name='email' className='form-inputs' placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                        />
                    {errors.email && <p>{errors.email}</p>}

                </div>

                <div className='input'>
                    <label htmlFor='Password' className='label'>Password</label>
                        <input type='Password' name='Password' className='form-inputs' placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                        />
                    {errors.password && <p>{errors.password}</p>}

                </div>
                
                <div className='input'>
                    <label htmlFor='Password2' className='label'>Confirm Your Password 
                        <input type='password' name='Password2' className='form-inputs' placeholder='Enter your password'
                        value={values.password2}
                        onChange={handleChange}
                        />
                        </label>
                    {errors.password2 && <p>{errors.password2}</p>} 
                </div>
                <button className='button-login' type='submit'>Sign Up</button>
                <span className='input-login'>
                    Already have account?Login <a href='#'>Here</a></span>
            </form>

            
        </div>
    )
}


export default Data


