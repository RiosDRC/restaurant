import React, { useContext, useState } from 'react'
import './Login.css'
import { Context } from '../../context/Context'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { MdOutlineRestaurantMenu } from "react-icons/md"

const Login = () => {
    const { setIsLoginVisible } = useContext(Context);
    const [ viewPassword, setViewPassword] = useState('password')
    const [ viewRePassword, setViewRePassword] = useState('password')
    const [loginView, setLoginView] = useState(true);
    const [registerData, setregisterData] = useState({email: '', password: '', re_password: ''})

    const handleToggleP = () => {
        if (viewPassword === 'password') {
            setViewPassword('text')
        } else {
            setViewPassword('password')
        }
    }

    const handleToggleRP = () => {
        if (viewRePassword === 'password') {
            setViewRePassword('text')
        } else {
            setViewRePassword('password')
        }
    }

    const handleRegisterChange = e => {
        setregisterData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

  return (
    <div className='app__login slide-bottom'>
        <MdOutlineRestaurantMenu className='close' onClick={() => setIsLoginVisible(prev => !prev)}/>
        <div className="app__login-content p__opensans">
        <h2 className='headtext__cormorant'>{loginView ? 'Log In' : 'Register'}</h2>
        {loginView
            ? <form onSubmit={e => e.preventDefault()}>
                <input type="email" required placeholder='Email Address'/>
                <div className="app__login-content_password">
                    <input type={viewPassword} required placeholder='Password'/>
                    { viewPassword === 'password'
                        ? <AiFillEye onClick={handleToggleP}/>
                        : <AiFillEyeInvisible onClick={handleToggleP} />
                    }
                </div>
                <button className='custom__button' type='submit'>Login</button>
                <h4>Forgot password?</h4>
            </form>

            : <form onSubmit={e => e.preventDefault()}>
            <input type="email" required placeholder='Email Address'/>
            <div className="app__login-content_password">
                <input type={viewPassword}
                name='password'
                required
                onChange={e => handleRegisterChange(e)}
                placeholder='Enter password'/>
                { viewPassword === 'password'
                    ? <AiFillEye onClick={handleToggleP}/>
                    : <AiFillEyeInvisible onClick={handleToggleP} />
                }
            </div>
            <div className="app__login-content_password">
                <input type={viewRePassword}
                name='re_password'
                required
                onChange={e => handleRegisterChange(e)}
                placeholder='Re-enter password'/>
                { viewRePassword === 'password'
                    ? <AiFillEye onClick={handleToggleRP}/>
                    : <AiFillEyeInvisible onClick={handleToggleRP} />
                }
            </div>
            <button disabled={registerData.re_password !== registerData.password} className='custom__button' type='submit' onClick={() => console.log(registerData)}>Register</button>
        </form>
            }
            {loginView
                ? <h5 onClick={() => setLoginView(prev => !prev)}>You don't have an account?</h5>
                : <h5 onClick={() => setLoginView(prev => !prev)}>You already have an account?</h5>
            }
        </div>
    </div>
  )
}

export default Login