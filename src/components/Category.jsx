import Wrapper from '../assets/wrappers/CategoryComponent'
import product6 from '../assets/images/product6.JPG'
import product4 from '../assets/images/product4.png'
import product5 from '../assets/images/product5.png'
// const categoryImages = [
//   {
//     url: '../assets/images/product1.JPG',
//     catName: ' pad',
//   },
//   {
//     url: '../assets/images/product4.JPG',
//     catName: ' pant',
//   },
//   {
//     url: '../assets/images/product5.JPG',
//     catName: ' fota',
//   },
// ]
function Category() {
  return (
    <Wrapper>
      <h2> Category page</h2>
      <div className='container'>
        <div className='category'>
          <img src={product4} alt='category one' />
          <div class='top-left'>Category one</div>
        </div>
        <div className='category'>
          <img src={product5} alt='category two' />
          <div class='top-left'>Category two</div>
        </div>
        <div className='category'>
          <img src={product6} alt='category three' />
          <div class='top-left'>Category three</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Category
