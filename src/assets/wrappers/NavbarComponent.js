import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  /* h-offset v-offset blur spread color; */
  box-shadow: 0px 5px 5px rgb(120, 119, 119);
  //box-shadow: 0 0 10px rgb(120, 119, 119);
  position: -webkit-sticky;
  position: sticky;
  margin-bottom: 5px;
  top: 0;
  .logo {
    flex: 1;
    // background-color: green;
    padding: 5px;
    max-width: 60px;
    max-height: 60px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .search-bar {
    flex: 2;
    color: black;
    //background-color: whitesmoke;
    padding: 20px 16px;
    .search {
      display: flex;
      background-color: #eef1ff;
      border-radius: 40px;
      width: 500px;
      height: 30px;
      align-items: center;
      //justify-content: center;
    }
    input {
      width: 400px;
      border: none;
      margin-left: 10px;
      background-color: #eef1ff;
      outline: none;
    }
    .search-icon {
      border: none;
      color: black;
      // background-color: lightgray;
      margin-left: 10px;
      padding-top: 2px;
    }
  }
  .notification {
    display: flex;
    flex: 2;
    justify-content: space-evenly;
    text-align: center;
    color: white;
    background: linear-gradient(to right, #ff99cc 0%, darkblue 100%);
    background-color: #33ccff;
    border-radius: 50px 0px 0px 50px;
    padding: 24px 16px;
    .register {
      //padding: 5px 0px;
      border: none;
      text-decoration: none;
    }
  }

  ul {
    flex: 3;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    //background-color: whitesmoke;
    justify-content: center;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: black;
    text-align: center;
    padding: 24px 16px;
    text-decoration: none;
    font-weight: 'bold';
  }

  li a:hover {
    background-color: whitesmoke;
  }

  /* Border customize 
  border-top: 20px solid #f637ec;
  border-bottom: 2px solid #f637ec;
  border-left: 2px solid #f637ec;
  border-right: 2px solid #f637ec;
  border-radius:4px;
  height:200px;
  width:400px;
  */
`

export default Wrapper
