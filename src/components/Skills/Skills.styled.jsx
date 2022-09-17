import styled from 'styled-components'

export const Skills = styled.section`
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

    .skill-sets {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      text-align: center;

      p {
        font-weight: 700;
        font-size: 12px;
        text-align: center;
        text-transform: uppercase;
      }

      .program-icon {
        display: flex;
        justify-content: center;
        column-gap: 20px;
        margin-bottom: 20px;
      }

      .image-container {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
`
