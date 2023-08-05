// import React from 'react'
// import { Slide } from 'react-slideshow-image'
// import 'react-slideshow-image/dist/styles.css'
// import Wrapper from '../assets/wrappers/SliderComponent'

// const text = 'Hey this is dan energy carepad website'
// const spanStyle = {
//   padding: '20px',
//   background: '#efefef',
//   color: '#000000',
// }

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'cover',
//   height: '400px',
// }
// const slideImages = [
//   {
//     url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//     caption: 'Slide 1',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
//     caption: 'Slide 2',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//     caption: 'Slide 3',
//   },
// ]

// const Slider = () => {
//   return (
//     <Wrapper>
//       <div className='slide-container'>
//         <Slide>
//           {slideImages.map((slideImage, index) => (
//             <div className='myslider fade'>
//               <div key={index}>
//                 <div className='txt'>
//                   <h1>Image 1</h1>
//                   <p>{text}</p>
//                 </div>
//                 <div
//                   style={{
//                     ...divStyle,
//                     backgroundImage: `url(${slideImage.url})`,
//                   }}
//                   className='img'
//                 >
//                   <span style={spanStyle}>{slideImage.caption}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slide>
//       </div>
//     </Wrapper>
//   )
// }

// // ;<div className='slider'>
// //   <div className='myslider fade' style={{ display: 'block' }}>
// //     <div className='txt'>
// //       <h1>Image 1</h1>
// //       <p>
// //         Hey this is dan energy carepad websiteHey this is dan energy carepad
// //         website Hey this is dan energy carepad website Hey this is dan energy
// //         carepad website Hey this is dan energy carepad website
// //       </p>
// //     </div>
// //     <img
// //       src={product4}
// //       alt='Image1'
// //       style={{ width: '100%', height: '100%' }}
// //     />
// //   </div>
// // </div>
// export default Slider

// // import Wrapper from '../assets/wrappers/SliderComponent'
// // import logo from '../assets/images/DanImage.jpg'
// // import product4 from '../assets/images/product4.JPG'
// // import product1 from '../assets/images/product1.JPG'
// // import product2 from '../assets/images/product2.JPG'

// // const myslide = document.querySelectorAll('.myslider'),
// //   dot = document.querySelectorAll('.dot')

// // let counter = 1
// // slidefun(counter)

// // let timer = setInterval(autoslide, 8000)

// // function autoslide() {
// //   counter += 1
// //   slidefun(counter)
// // }

// // function plusSlides(n) {
// //   counter += n
// //   slidefun(counter)
// //   resetTimer()
// // }

// // function currentSlide(n) {
// //   counter = n
// //   slidefun(counter)
// //   resetTimer()
// // }

// // function resetTimer() {
// //   clearInterval(timer)
// //   timer = setInterval(autoslide, 8000)
// // }

// // function slidefun(n) {
// //   let i
// //   for (i = 0; i < myslide.length; i++) {
// //     myslide[i].style.display = 'none'
// //   }
// //   for (i = 0; i < dot.length; i++) {
// //     dot[i].classList.remove('active')
// //   }
// //   if (n > myslide.length) {
// //     counter = 1
// //   }
// //   if (n < 1) {
// //     counter = myslide.length
// //   }

// //   myslide[counter - 1].document.getElementsByName('myslider').style.display =
// //     'block'
// //   //myslide[counter - 1].style.display = 'block'
// //   dot[counter - 1].classList.add('active')
// // }

// // function Slider() {
// //   return (
// //     <Wrapper>
// //       <div className='slider'>
// //         <div className='myslider fade' style={{ display: 'block' }}>
// //           <div className='txt'>
// //             <h1>Image 1</h1>
// //             <p>
// //               Hey this is dan energy carepad websiteHey this is dan energy
// //               carepad website Hey this is dan energy carepad website Hey this is
// //               dan energy carepad website Hey this is dan energy carepad website
// //             </p>
// //           </div>
// //           <img
// //             src={product4}
// //             alt='Image1'
// //             style={{ width: '100%', height: '100%' }}
// //           />
// //         </div>
// //         <div className='myslider fade' style={{ display: 'block' }}>
// //           <div className='txt'>
// //             <h1>Image 2</h1>
// //             <p>
// //               Hey this is dan energy carepad websiteHey this is dan energy
// //               carepad website Hey this is dan energy carepad website Hey this is
// //               dan energy carepad website Hey this is dan energy carepad website
// //             </p>
// //           </div>
// //           <img
// //             src={product2}
// //             alt='Image2'
// //             style={{ width: '100%', height: '100%' }}
// //           />
// //         </div>
// //         <div className='myslider fade' style={{ display: 'block' }}>
// //           <div className='txt'>
// //             <h1>Image 3</h1>
// //             <p>
// //               Hey this is dan energy carepad websiteHey this is dan energy
// //               carepad website Hey this is dan energy carepad website Hey this is
// //               dan energy carepad website Hey this is dan energy carepad website
// //             </p>
// //           </div>
// //           <img
// //             src={product1}
// //             alt='Image3'
// //             style={{ width: '100%', height: '100%' }}
// //           />
// //         </div>
// //         <a className='prev' onclick={plusSlides(-1)}>
// //           &#60;
// //         </a>
// //         <a className='next' onclick={plusSlides(1)}>
// //           &#62;
// //         </a>
// //         <div className='dotsbox' style={{ textAlign: 'center' }}>
// //           <span className='dot' onclick={currentSlide(1)}></span>
// //           <span className='dot' onclick={currentSlide(2)}></span>
// //           <span className='dot' onclick={currentSlide(3)}></span>
// //           {/* <span className='dot' onclick='currentSlide(4)'></span>
// //           <span className='dot' onclick='currentSlide(5)'></span> */}
// //         </div>
// //       </div>
// //     </Wrapper>
// //   )
// // }

// // export default Slider

// // // import HeroSlider, { Slide } from 'hero-slider'
// // // import logo from '../assets/images/DanImage.jpg'

// // // const image1 = ` ${logo}`
// // // const image2 =
// // //   'https://www.shutterstock.com/image-vector/3d-illustration-sanitary-pad-surrounded-600w-2258793395.jpg'
// // // const Slider = () => {
// // //   return (
// // //     <HeroSlider
// // //       slidingAnimation='left_to_right'
// // //       orientation='horizontal'
// // //       initialSlide={1}
// // //       onBeforeChange={(previousSlide, nextSlide) =>
// // //         console.log('onBeforeChange', previousSlide, nextSlide)
// // //       }
// // //       onChange={(nextSlide) => console.log('onChange', nextSlide)}
// // //       onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
// // //       style={{ backgroundColor: 'rgba(0,0,0,0.33)' }}
// // //       settings={{
// // //         slidingDuration: 250,
// // //         slidingDelay: 100,
// // //         shouldAutoplay: true,
// // //         shouldDisplayButtons: true,
// // //         autoplayDuration: 3000,
// // //         height: '100vh',
// // //       }}
// // //     >
// // //       <Slide
// // //         background={{
// // //           backgroundImage: `${logo}`,
// // //           backgroundAttachment: 'fixed',
// // //         }}
// // //       />
// // //       <Slide
// // //         background={{
// // //           backgroundImage: image2,
// // //           backgroundAttachment: 'fixed',
// // //         }}
// // //       />
// // //       <Slide
// // //         background={{
// // //           backgroundImage: image2,
// // //           backgroundAttachment: 'fixed',
// // //         }}
// // //       />
// // //       <Slide
// // //         background={{
// // //           backgroundImage: image2,
// // //           backgroundAttachment: 'fixed',
// // //         }}
// // //       />
// // //       <Slide
// // //         background={{
// // //           backgroundImage: image2,
// // //           backgroundAttachment: 'fixed',
// // //         }}
// // //       />
// // //     </HeroSlider>
// // //   )
// // // }

// // // export default Slider
