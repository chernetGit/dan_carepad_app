import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  //background-color: red;
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    // background-color: green;
    padding: 40px;
    gap: 25px;
    min-width: 100%;
    min-height: 40%;
    //margin-top: 200px;
  }
  .grid-item {
    background-color: #fff;
    border: 0.00000002px solid rgba(0, 0, 0, 0.2);
    padding: 20px;
    font-size: 30px;
    text-align: center;
    border-radius: 10px;
  }

  .grid-item:hover {
    box-shadow: 0 0 20px 0px rgb(120, 119, 119);
    transform: scale(1.05, 1.05);
    border: none;
    img {
      opacity: 0.3;
    }
    .rating,
    .price {
      color: #f637ec;
      font-weight: bold;
    }
    .button {
      display: block;
    }
    .name {
      color: #f637ec;
    }
  }

  img {
    width: 150px;
    height: 150px;
  }

  .button {
    background-color: #f637ec;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    position: absolute;
    top: 60px;
    left: 63px;
    cursor: pointer;
    display: none;
  }

  .name {
    font-family: serif;
    font-weight: none;
    font-size: 25px;
  }
  .price-rating {
    display: flex;
    flex-direction: row;
    margin: 0px;
    width: 100%;
  }
  .rating,
  .price {
    background-color: white;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 25px;
    color: black;
  }

  .sidebar {
    width: 30%;
    height: 100%;
    margin-left: 50px;
    padding-left: 50px;
    padding-top: 70px;
    padding-bottom: 70px;
    border-radius: 10px;
    background: linear-gradient(to right, #ff99cc 0%, lightblue 100%);
    .logo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  .category-img {
    //background-color: red;

    padding: 1px;
    img {
      width: 100%;
      height: 300px;
      border-radius: 0px 0px 10px 10px;
      object-fit: cover;
    }
  }
  .hr2 {
    width: 90%;
    height: 2px;
    margin-left: 0px;
    margin-top: 100px;
    margin-bottom: 20px;
  }
  .hr1 {
    width: 100%;
    color: black;
    height: 1px;
    //margin-left: 5%;
    // margin-top: 100px;
    //margin-bottom: 20px;
    background-color: purple;
  }
  h2 {
    font-family: sans-serif;
    font-weight: bold;
    color: #f637ec;
  }
  h3 {
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    font-weight: normal;
    padding-top: 15px;
    cursor: pointer;
  }
  /* Drop down css */

  ul li {
    list-style: none;
  }

  .dropbtn {
    background: none;
    color: black;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: flex;
  }

  .dropdown-content {
    display: none;
    left: 55px;
    top: 0px;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    color: white;
    background: linear-gradient(to right, lightblue 0%, #ff99cc 100%);
  }
  .filter:hover {
    color: white;
    background: linear-gradient(to right, lightblue 0%, #ff99cc 100%);
  }
  .filter:hover .dropdown-content {
    color: white;
    display: block;
    background: linear-gradient(to right, lightblue 0%, #ff99cc 100%);
  }

  .filter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    //background-color: red;
    padding-left: 30px;
  }
`

export default Wrapper
