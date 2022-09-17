import styled from 'styled-components'

export const Hero = styled.section`
  padding: 30px 15px;
  background-color: #f0deca;

  .image-container {
    height: 390px;
    width: 390px;
    margin-bottom: 20px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  h1 {
    font-size: 50px;
    margin-bottom: 20px;
  }

  p {
    max-width: 420px;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    color: #6e6e6e;
  }
`
