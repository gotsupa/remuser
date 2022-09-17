import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Home from './pages/Home'

import MontserratLight from './assets/fonts/Montserrat-Light.ttf'
import MontserratRegular from './assets/fonts/Montserrat-Regular.ttf'
import MontserratMedium from './assets/fonts/Montserrat-Medium.ttf'
import MontserratSemiBold from './assets/fonts/Montserrat-SemiBold.ttf'
import MontserratBold from './assets/fonts/Montserrat-Bold.ttf'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: Montserrat;
    src: url('${MontserratLight}');
    font-weight: 200;
    font-styled: normal;
  }

  @font-face {
    font-family: Montserrat;
    src: url('${MontserratRegular}');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: Montserrat;
    src: url('${MontserratMedium}');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: Montserrat;
    src: url('${MontserratSemiBold}');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: Montserrat;
    src: url('${MontserratBold}');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    color: #7a5932;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App
