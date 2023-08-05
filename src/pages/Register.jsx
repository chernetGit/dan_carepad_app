import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterPage'
import DanImage from '../assets/images/DanImage.jpg'
import DanImage2 from '../assets/images/DanImage2.png'
import Navbar from '../components/Navbar'

function Register() {
  const navigate = useNavigate()
  //const [isMember, setIsMember] = useState('True')
  const handleClick = () => {
    navigate('/login')
  }
  return (
    <div>
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
          <h3>Register</h3>
          <label htmlFor=''>Name</label>
          <input type='text' />
          <label htmlFor=''>Email</label>
          <input type='email' />
          <label htmlFor=''>Password</label>
          <input type='password' />
          <button type='submit' className='button'>
            Submit
          </button>
          <div className='login-register'>
            <p>Have you registered already?</p>
            <button type='button' onClick={handleClick}>
              Login
            </button>
          </div>
        </form>
      </Wrapper>
    </div>
  )
}

export default Register
