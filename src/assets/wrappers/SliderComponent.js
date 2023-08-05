import { styled } from 'styled-components'

const Wrapper = styled.section`
  margin-top: -20px;
  .slider {
    position: relative;
    width: 100%;
    background: #2c3e50;
  }
  .myslider {
    //height: 655px;
    //display: none;
    overflow: hidden;
  }
  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    //display: none;
    font-size: 50px;
    color: #fff;
    transition: 0.1s;
    user-select: none;
    padding: 15px;
    cursor: pointer;
  }
  .prev:hover,
  .next:hover {
    color: #3498db;
  }
  .next {
    right: 0;
  }
  .dotsbox {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 20px;
    cursor: pointer;
  }
  .dot {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 3px solid #fff;
    border-radius: 50%;
    margin: 0 10px;
    cursor: pointer;
  }
  .dot:hover,
  a:active {
    border-color: #3498db;
  }
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
  @-webkit-keyframes fade {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }
  .txt {
    position: relative;
    color: #fff;
    letter-spacing: 2px;
    line-height: 35px;
    top: 180px;
    left: 15%;
    -webkit-animation-name: posi;
    -webkit-animation-duration: 2s;
    animation-name: posi;
    animation-duration: 2s;
    z-index: 1;
  }
  @-webkit-keyframes posi {
    from {
      left: 50%;
    }
    to {
      left: 15%;
    }
  }
  @keyframes posi {
    from {
      left: 50%;
    }
    to {
      left: 15%;
    }
  }
  .txt h1 {
    color: #3498db;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .text p {
    font-weight: bold;
    font-size: 20px;
  }

  .img {
    transform: scale(1.5, 1.5);
    -webkit-animation-name: zoomin;
    -webkit-animation-duration: 40s;
    animation-name: zoomin;
    animation-duration: 40s;
  }
  @-webkit-keyframes zoomin {
    from {
      transform: scale(1, 1);
    }
    to {
      transform: scale(1.5, 1.5);
    }
  }
  @keyframes zoomin {
    from {
      transform: scale(1, 1);
    }
    to {
      transform: scale(1.5, 1.5);
    }
  }

  @media screen and (max-width: 800px) {
    .myslider {
      height: 500px;
    }
    .txt {
      line-height: 25px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-animation-name: posi2;
      -webkit-animation-duration: 2s;
      animation-name: posi2;
      animation-duration: 2s;
    }
    @-webkit-keyframes posi2 {
      from {
        top: 35%;
      }
      to {
        top: 50%;
      }
    }
    @keyframes posi2 {
      from {
        top: 35%;
      }
      to {
        top: 50%;
      }
    }
    .txt h1 {
      font-size: 40px;
    }
    .txt p {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 520px) {
    .txt h1 {
      font-size: 30px;
    }
  }
`

export default Wrapper

// import { styled } from 'styled-components'

// const Wrapper = styled.section`
//   .slider {
//     position: relative;
//     width: 100%;
//     background: #2c3e50;
//   }
//   .myslider {
//     height: 655px;
//     display: none;
//     overflow: hidden;
//   }
//   .prev,
//   .next {
//     position: absolute;
//     top: 50%;
//     transform: translate(0, -50%);
//     //display: none;
//     font-size: 50px;
//     color: #fff;
//     transition: 0.1s;
//     user-select: none;
//     padding: 15px;
//     cursor: pointer;
//   }
//   .prev:hover,
//   .next:hover {
//     color: #3498db;
//   }
//   .next {
//     right: 0;
//   }
//   .dotsbox {
//     position: absolute;
//     left: 50%;
//     transform: translate(-50%);
//     bottom: 20px;
//     cursor: pointer;
//   }
//   .dot {
//     display: inline-block;
//     width: 15px;
//     height: 15px;
//     border: 3px solid #fff;
//     border-radius: 50%;
//     margin: 0 10px;
//     cursor: pointer;
//   }
//   .dot:hover,
//   a:active {
//     border-color: #3498db;
//   }
//   .fade {
//     -webkit-animation-name: fade;
//     -webkit-animation-duration: 1.5s;
//     animation-name: fade;
//     animation-duration: 1.5s;
//   }
//   @-webkit-keyframes fade {
//     from {
//       opacity: 0.8;
//     }
//     to {
//       opacity: 1;
//     }
//   }
//   @keyframes fade {
//     from {
//       opacity: 0.8;
//     }
//     to {
//       opacity: 1;
//     }
//   }
//   .txt {
//     position: absolute;
//     color: #fff;
//     letter-spacing: 2px;
//     line-height: 35px;
//     top: 40%;
//     left: 50%;
//     -webkit-animation-name: posi;
//     -webkit-animation-duration: 2s;
//     animation-name: posi;
//     animation-duration: 2s;
//     z-index: 1;
//   }
//   @-webkit-keyframes posi {
//     from {
//       left: 25%;
//     }
//     to {
//       left: 15%;
//     }
//   }
//   @keyframes posi {
//     from {
//       left: 25%;
//     }
//     to {
//       left: 15%;
//     }
//   }
//   .txt h1 {
//     color: #3498db;
//     font-weight: bold;
//     margin-bottom: 20px;
//   }
//   .text p {
//     font-weight: bold;
//     font-size: 20px;
//   }

//   img {
//     transform: scale(1.5, 1.5);
//     -webkit-animation-name: zoomin;
//     -webkit-animation-duration: 40s;
//     animation-name: zoomin;
//     animation-duration: 40s;
//   }
//   @-webkit-keyframes zoomin {
//     from {
//       transform: scale(1, 1);
//     }
//     to {
//       transform: scale(1.5, 1.5);
//     }
//   }
//   @keyframes zoomin {
//     from {
//       transform: scale(1, 1);
//     }
//     to {
//       transform: scale(1.5, 1.5);
//     }
//   }

//   @media screen and (max-width: 800px) {
//     .myslider {
//       height: 500px;
//     }
//     .txt {
//       line-height: 25px;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       -webkit-animation-name: posi2;
//       -webkit-animation-duration: 2s;
//       animation-name: posi2;
//       animation-duration: 2s;
//     }
//     @-webkit-keyframes posi2 {
//       from {
//         top: 35%;
//       }
//       to {
//         top: 50%;
//       }
//     }
//     @keyframes posi2 {
//       from {
//         top: 35%;
//       }
//       to {
//         top: 50%;
//       }
//     }
//     .txt h1 {
//       font-size: 40px;
//     }
//     .txt p {
//       font-size: 13px;
//     }
//   }

//   @media screen and (max-width: 520px) {
//     .txt h1 {
//       font-size: 30px;
//     }
//   }
// `

// export default Wrapper
