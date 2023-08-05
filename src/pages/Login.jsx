import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Wrapper from '../assets/wrappers/RegisterPage'
import DanImage from '../assets/images/DanImage.jpg'
import DanImage2 from '../assets/images/DanImage2.png'

function Register() {
  const navigate = useNavigate()
  //const [isMember, setIsMember] = useState('True')
  const handleClick = () => {
    navigate('/register')
  }
  const handleClickForgot = () => {
    navigate('/')
  }
  return (
    <div className='container'>
      <Navbar />
      <Wrapper
        style={{
          marginTop: '70px',
        }}
      >
        <form className='form'>
          <div className='logo'>
            <img src={DanImage2} alt='' />
            <h1>Carepad </h1>
          </div>
          <h3>Login</h3>
          <label htmlFor=''>Email</label>
          <input type='email' />
          <label htmlFor=''>Password</label>
          <input type='password' />
          <button type='submit' className='button'>
            Submit
          </button>
          <div className='login-register'>
            <p>Doesn't have an account yet?</p>
            <button type='button' onClick={handleClick}>
              Register
            </button>
          </div>
          <div className='login-register'>
            <button type='button' onClick={handleClickForgot}>
              Forgot password?
            </button>
          </div>
        </form>
      </Wrapper>
    </div>
  )
}

export default Register
