import styled, { keyframes } from 'styled-components'

export const Education = styled.section`
  background-color: #fcf7f1;

  .header {
    background-color: #f8a577;
    height: 100px;
    padding: 30px 15px;
    text-align: center;
    position: relative;

    h1 {
      font-size: 40px;
      color: #fcf7f1;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .rectangle {
    position: absolute;
    top: -30px;
    left: -30px;
    width: 100px;
    height: 100px;
    border: 7px solid #fff;
    animation: spin 4s linear infinite;
  }

  .content {
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    li.school-year:not(:last-child) {
      margin-bottom: 40px;
    }

    li.school-year div.wrap-year {
      display: flex;
      column-gap: 40px;

      div.line {
        border: 1px solid #188497;
        width: 3px;
        height: 100%;
      }

      div.circle {
        width: 35px;
        height: 35px;
        border: 3px solid #188497;
        border-radius: 50%;
        padding: 5px;

        .fill {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #188497;
          opacity: 0;
          transition: all 0.5s;
        }
      }

      div li:not(:last-child) {
        margin-bottom: 15px;
      }

      h2 {
        font-weight: 700;
        margin-bottom: 15px;
      }
    }

    li.school-year div.wrap-year:hover {
      div.circle .fill {
        opacity: 1;
      }
    }

    /* .school-year {
      display: flex;

      .circle {
      }
    } */

    /* .content {
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
    } */
  }
`
