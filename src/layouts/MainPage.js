import React from 'react'
import { createGlobalStyle } from 'styled-components';
import TopLayer from './TopLayer';
import BottomLayout from './BottomLayout';


const GlobalStyle = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;

      > body {
        background: #000000;
        color: #999999;
        font-family: 'Montserrat'
      }
      h1,
      h2,
      h3,
      h4 {
        color: #ffffff;
      }

      img {
        width: 100%;
      }
    }
`

const MainPage = () => {
    return (
        <React.Fragment>
           <GlobalStyle /> 
           <TopLayer />
           <BottomLayout /> 
        </React.Fragment>
    )
}

export default MainPage
