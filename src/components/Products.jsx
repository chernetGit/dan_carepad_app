import Wrapper from '../assets/wrappers/ProductsPage'
import DanImage from '../assets/images/DanImage.jpg'
import DanImage2 from '../assets/images/DanImage2.png'
import product3 from '../assets/images/product3.JPG'
import Rating from '../components/Rating'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const popularProducts = [
  {
    id: 1,
    name: 'one',
    price: 10.54,
    rating: 2,
    img: { DanImage },
  },
  {
    id: 2,
    name: 'two',
    price: 20.67,
    rating: 2,
    img: './assets/images/product2.JPG',
  },
  {
    id: 3,
    name: 'three',
    price: 30.03,
    rating: 2,
    img: './assets/images/product3.JPG',
  },
  {
    id: 4,
    name: 'four',
    price: 40.9,
    rating: 2,
    img: './assets/images/product4.JPG',
  },
  {
    id: 5,
    name: 'five',
    price: 50.5,
    rating: 2,
    img: './assets/images/product5.JPG',
  },
  {
    id: 6,
    name: 'six',
    price: 60.45,
    rating: 2,
    img: './assets/images/product6.JPG',
  },
  {
    id: 7,
    name: 'seven',
    price: 70.12,
    rating: 2,
    img: './assets/images/1.JPG',
  },
  {
    id: 8,
    name: 'eight',
    price: 80.56,
    rating: 2,
    img: './assets/images/2.JPG',
  },
]

function Products() {
  return (
    <Wrapper>
      {/* s */}
      <div className='sidebar'>
        <div className='logo'>
          <img src={DanImage2} alt='' />
          <h1>CAREPAD </h1>
        </div>
        <hr className='hr2' />
        <div className='filter1'>
          <h2>Categories</h2>
          <ul>
            <li>
              <div className='filter'>
                <h3>Pads</h3>
                <div class='dropdown'>
                  <button class='dropbtn'>
                    <KeyboardArrowRightIcon />
                  </button>
                </div>
              </div>
              <hr className='hr1' />
            </li>
            <li>
              <div className='filter'>
                <h3>Pants</h3>
                <div class='dropdown'>
                  <button class='dropbtn'>
                    <KeyboardArrowRightIcon />
                  </button>
                </div>
              </div>
              <hr className='hr1' />
            </li>
            <li>
              <div className='filter'>
                <h3>Bags</h3>
                <div class='dropdown'>
                  <button class='dropbtn'>
                    <KeyboardArrowRightIcon />
                  </button>
                </div>
              </div>
              <hr className='hr1' />
            </li>
            <li>
              <div className='filter'>
                <h3>Fotas</h3>
                <div class='dropdown'>
                  <button class='dropbtn'>
                    <KeyboardArrowRightIcon />
                  </button>
                </div>
              </div>
              <hr className='hr1' />
            </li>
          </ul>
          <hr className='hr2' />
          <h2>Filter by</h2>
          <ul>
            <li>
              <div className='filter'>
                <h3>Name</h3>
                <div class='dropdown'>
                  <button class='dropbtn'>
                    <KeyboardArrowRightIcon />
                  </button>
                  <div class='dropdown-content'>
                    <a href='#'>Name A - Z</a>
                    <a href='#'> Name Z - A</a>
                  </div>
                </div>
              </div>
              <hr className='hr1' />
            </li>
            <li>
              <div className='filter'>
                <h3>Price</h3>
                <div class='dropdown'>
                  <button class='dropbtn'>
                    <KeyboardArrowRightIcon />
                  </button>
                  <div class='dropdown-content'>
                    <a href='#'>Price High - Low</a>
                    <a href='#'>Price Low - High</a>
                  </div>
                </div>
              </div>
              <hr className='hr1' />
            </li>
            <li>
              <div className='filter'>
                <h3>Color</h3>
                <div class='dropdown'>
                  <button class='dropbtn'>
                    <KeyboardArrowRightIcon />
                  </button>
                  <div class='dropdown-content'>
                    <a href='#'>Black</a>
                    <a href='#'>White</a>
                    <a href='#'>Red</a>
                    <a href='#'>Pink</a>
                    <a href='#'>Green</a>
                    <a href='#'>Blue</a>
                    <a href='#'>Purple</a>
                  </div>
                </div>
              </div>
              <hr className='hr1' />
            </li>
            <li>
              <div className='filter'>
                <h3>Size</h3>
                <div class='dropdown'>
                  <button class='dropbtn'>
                    <KeyboardArrowRightIcon />
                  </button>
                  <div class='dropdown-content'>
                    <a href='#'>S</a>
                    <a href='#'>M</a>
                    <a href='#'>L</a>
                    <a href='#'>Xl</a>
                    <a href='#'>XXl</a>
                  </div>
                </div>
              </div>
              <hr className='hr1' />
            </li>
            <li>
              <div className='filter'>
                <h3>Rates</h3>
                <div class='dropdown'>
                  <button class='dropbtn'>
                    <KeyboardArrowRightIcon />
                  </button>
                </div>
              </div>
              <hr className='hr1' />
            </li>
            <li>
              <div className='filter'>
                <h3>Newest First</h3>
                <div class='dropdown'>
                  <button class='dropbtn'>
                    <KeyboardArrowRightIcon />
                  </button>
                </div>
              </div>
              <hr className='hr1' />
            </li>
            <li>
              <div className='filter'>
                <h3>Sales</h3>
                <div class='dropdown'>
                  <button class='dropbtn'>
                    <KeyboardArrowRightIcon />
                  </button>
                </div>
              </div>
              <hr className='hr1' />
            </li>
          </ul>
        </div>
      </div>

      <div style={{ minWidth: '70%', marginLeft: '10px' }}>
        <div className='category-img'>
          <img src={DanImage} alt='' />
        </div>
        <div className='grid-container'>
          {popularProducts.map((product) => (
            <div className='grid-item'>
              <div style={{ marginBottom: '20px' }}>
                <img src={product3} alt='dan' />
                <p className='name'>{product.name}</p>
                <button className='button'>ADD TO CART</button>
              </div>
              <div className='price-rating'>
                <div
                  className='price'
                  style={{
                    backgroundColor: 'whitesmoke',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '10px',
                    borderRadius: '10px 0px 0px 10px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '25px',
                    }}
                  >
                    ETB
                  </span>
                  {product.price}
                </div>
                <div
                  className='rating'
                  style={{
                    borderRadius: '0px 10px 10px 0px',
                  }}
                >
                  {<Rating />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Products
