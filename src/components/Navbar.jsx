import { Link } from 'react-router-dom'
// import img from '../assets/images/not-found.svg'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Wrapper from '../assets/wrappers/NavbarComponent'
import DanImage2 from '../assets/images/DanImage2.png'
function Navbar() {
  return (
    <Wrapper>
      <div className='logo'>
        <img src={DanImage2} alt='Logo' />
      </div>
      <ul>
        <li>
          <Link class='active' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <div className='search-bar'>
        <div className='search'>
          <div className='search-icon'>
            <SearchIcon />
          </div>
          <div>
            <input type='text' placeholder='' />
          </div>
        </div>
      </div>
      <div className='notification'>
        <div className='register'>
          <Link
            to='/register'
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Register
          </Link>
        </div>
        <div className='register'>
          <Link style={{ color: 'white', fontWeight: 'bold' }}>
            <NotificationsIcon />
          </Link>
        </div>
        <div className='register'>
          <Link style={{ color: 'white', fontWeight: 'bold' }}>
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
