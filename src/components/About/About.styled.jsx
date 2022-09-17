import styled from 'styled-components'

export const About = styled.section`
  background-color: #fcf7f1;

  .header {
    background-color: #198597;
    height: 100px;
    padding: 30px 15px;
    text-align: center;

    h1 {
      font-size: 40px;
      color: #fcf7f1;
    }
  }

  .about-content {
    padding: 30px 15px;

    .content {
      margin-bottom: 50px;

      h2 {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 50px;
      }

      p {
        font-weight: 400;
        font-size: 15px;
        line-height: 30px;
      }
    }

    .image {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 10px;

      p {
        font-weight: 700;
        font-size: 12px;
        text-align: center;
      }

      > div {
        img {
          height: 120px;
          width: 120px;
          margin-bottom: 10px;
        }
      }
    }
  }
`
