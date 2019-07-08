import React from 'react';
import background from '../img/background.jpg';
import logo from '../img/logo.png';
import styled from 'styled-components';
import Form from '../components/signin/Form';
import Footer from '../components/signin/Footer';
import { Link } from 'react-router-dom'


const SignInHeader = styled.div `
    position: relative;
`;

const SignHeaderTop = styled.div `
    width: 100%;
    height: 200vh;
    position: relative;
    background: url(${background}) no-repeat center center/cover;

    @media(max-width: 960px){
        background: black;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        background: rgba(0, 0, 0, 0.6);

    }

    img {
        z-index: 2;
        position: relative;
        transform: translate(30px, 30px);

            @media(max-width: 960px) {
                transform: scale(0.8, 0.8);
                right: 0px;
                top: 10px;
            }
    }

`;

const SignIn = () => {
    return (
        <SignInHeader>
            <SignHeaderTop>
                <Link to='/'><img src={logo} alt="netflix logo"/></Link>
                <Form />
            </SignHeaderTop>
            <Footer />
        </SignInHeader>
    )
}

export default SignIn
