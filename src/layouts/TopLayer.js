import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button'
import logo from '../img/logo.png';
import background from '../img/background.jpg';
import { Link } from "react-router-dom";

const Header = styled.div `
    width: 100%;
    height: 93vh;
    position: relative;
    background: url(${background}) no-repeat center center/cover;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, 0.6);
        box-shadow: inset 50px 50px 100px #000000,
            inset -50px -50px 100px #000000;
    }

    @media(max-width: 960px) {
        height: 70vh;
    }

    @media (max-width: 700px) {
        &::after {
            box-shadow: inset 80px 80px 250px #000000,
            inset -80px -80px 250px #000000
        }
    }
`;

const HeaderTop = styled.div `
    position: relative;
    height: 90px;
    z-index: 2;

    img {
        width: 170px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    @media(max-width: 960px) {
        img {
           top: 30%;
           left: 5%;
           transform: translate(0)
       } 
    }

    @media (max-width: 700px){
        img {
            width: 80px
        }
    }
`;

const HeaderContent = styled.div `
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    margin-top: 6.5%;

    h1 {
        font-weight: 700;
        font-size: 5.2rem;
        line-height: 1.1;
        margin: 0 0 2rem
    }

    i {
        margin-left: 20px
    }

    p {
        color: #ffffff;

        &.main {
            text-transform: uppercase;
            font-weight: 400;
            font-size: 1.9rem;
            line-height: 1.25;
            margin: 0 0 2rem;
        }

        &.ref {
            margin-top: 25px;
            font-size: 1.2rem

            a {
                color: #ffffff;
                font-weight: bold;
            }
        }
    }

    @media(max-width: 960px){
        margin-top: 2%;
        h1 {
            font-size: 3.7rem;
            line-height: 1;
        }

        p {
            font-size: 1.5rem;
        }
    }
    
    @media (max-width: 700px){
        margin-top: 0;
        h1 {
            font-size: 2.0rem;
            line-height: 1;
        }

        .main {
            visibility: hidden
        }
    }
`;

const ButtonSignUp = styled(Button) `
    float: right;
    transform: translate(-50%, 60%);

    @media (max-width: 700px) {
        font-size: 1rem;
        transform: translate(-10%, 60%);
    }
`

const ButtonMain = styled(Button) `
    font-size: 2rem;
    padding: 1.5rem 2.1rem;
    text-transform: uppercase;

    @media(max-width: 960px) {
        font-size: 1.5rem;
        padding: 1.4rem 2rem;
    }

    @media (max-width: 700px) {
        font-size: 1.2rem;
        padding: 1.0rem 1.6rem;
    }    
`;



const TopLayer = () => {
    return (
        <Header>
            <HeaderTop>
                <Link to="/"><img src={logo} alt="Netflix-Logo"/></Link>
                <Link to="/signin">
                    <ButtonSignUp>Sign In</ButtonSignUp>
                </Link>
            </HeaderTop>
            <HeaderContent>
                <h1>See whats next</h1>
                <p className="main">Watch anywhere. Cancel Anytime</p>
                <Link to="/signup">
                    <ButtonMain>try 30 days free <i className="fas fa-chevron-right"></i></ButtonMain>
                </Link>
                <p className="ref">Have an account? <Link to="/signin">Sign In</Link></p>
            </HeaderContent>
        </Header>
    )
}

export default TopLayer
