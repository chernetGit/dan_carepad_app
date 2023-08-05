import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .container {
    display: flex;
    padding: 10px;
  }
  div.category {
    position: relative;
    text-align: center;
    padding: 30px;
  }
  .category:hover {
    background: linear-gradient(to right, #ff99cc 0%, #ff99cc 100%);
    .top-left {
      color: white;
    }
  }
  div.top-left {
    position: absolute;
    bottom: 10px;
    left: 70px;
    font-size: 30px;
    font-weight: 500px;
    font-family: sans-serif;
  }
  img {
    width: auto;
    height: auto;
    max-width: 400px;
    max-height: 400px;
    margin-bottom: 20px;
    border-radius: 15px;
  }
`
export default Wrapper
