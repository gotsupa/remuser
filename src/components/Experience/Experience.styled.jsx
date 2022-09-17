import styled from 'styled-components'

export const Experience = styled.section`
  .header {
    background-color: #fff48f;
    height: 100px;
    padding: 30px 15px;
    text-align: center;

    h1 {
      font-size: 40px;
      color: #7a5932;
    }
  }

  .content {
    padding: 30px 15px;

    .wrap-year {
      h2,
      h3 {
        font-weight: 600;
        margin-bottom: 10px;
      }

      h2 {
        margin-bottom: 20px;
      }

      ul {
        list-style: disc;
        list-style-position: inside;
      }

      li {
        line-height: 25px;
        :not(:last-child) {
          margin-bottom: 15px;
        }
      }
    }
  }
`
