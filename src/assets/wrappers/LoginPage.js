import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 150px;
  display: grid;
  align-items: center;
  justify-content: center;
  //background-color: yellow;
  .logo {
    display: flex;
    margin: 0 auto;
    margin-bottom: 2px;
    // background-color: red;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .form {
    border-top: 10px solid #f637ec;
    border-bottom: 0.2px;
    border-left: 0.2px;
    border-right: 0.2px;
    border-radius: 4px;
    min-height: 400px;
    width: 400px;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    box-shadow: 0 0 5px 0px rgb(120, 119, 119);
  }

  h1 {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #f637ec;
  }
  h3 {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  label {
    font-size: 20px;
    font-weight: 200px;
    margin-top: 1rem;
  }
  .button {
    margin-top: 1.5rem;
    background-color: #f637ec;
    color: white;
    font-size: 20px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  input {
    width: 320px;
    height: 30px;
    border: 0.2px solid silver;
    border-radius: 5px;
    margin-top: 5px;
  }
  .login-register {
    display: flex;
    flex-direction: row;
    //background-color: red;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    button {
      margin-top: 15px;
      font-size: 20px;
      background-color: whitesmoke;
      color: #f637ec;
      cursor: pointer;
      border: none;
      border-radius: 2px;
    }
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
`
export default Wrapper
