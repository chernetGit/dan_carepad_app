import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/FooterComponent'
import DanImage2 from '../assets/images/DanImage2.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CopyrightIcon from '@mui/icons-material/Copyright'

function Footer() {
  return (
    <Wrapper>
      <div className='row'>
        <div className='col'>
          <img src={DanImage2} alt='Logo' className='logo' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab amet
            deserunt vero ad impedit unde eveniet consequatur atque laboriosam
            quia repellat saepe, totam fuga dolorem pariatur. Illo voluptates
            perspiciatis iste!
          </p>
        </div>
        <div className='col'>
          <h3>
            Office
            <div className='underline'>
              <span></span>
            </div>
          </h3>
          <p>ITPL Road</p>
          <p>Whitefield, Bangalor</p>
          <p>Karnataka, PIN 5600066, India</p>
          <p className='email-id'>carepad@danenergyethiopia.com</p>
          <h4>+251 -933549887</h4>
        </div>
        <div className='col'>
          <h3>
            Links
            <div className='underline'>
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <Link to='/' className='links'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/contact' className='links'>
                Contact us
              </Link>
            </li>
            <li>
              <Link to='/about' className='links'>
                About
              </Link>
            </li>
            <li>
              <Link to='/register' className='links'>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
        <div className='col'>
          <h3>
            Newsletter
            <div className='underline'>
              <span></span>
            </div>
          </h3>
          <form>
            <EmailOutlinedIcon className='email-icon' />
            <input type='email' placeholder='Enter your email' />
            <button type='submit'>
              <ArrowRightAltIcon className='arrow-icon' />
            </button>
          </form>
          <div className='social-icons'>
            <FacebookOutlinedIcon className='social' />
            <LinkedInIcon className='social' />
            <TwitterIcon className='social' />
          </div>
        </div>
      </div>
      <hr />
      <p className='copyright'>
        Dan Energy Ethiopia &nbsp;&nbsp; &copy; 2023 -All Rights Reserved
      </p>
    </Wrapper>
  )
}

export default Footer
