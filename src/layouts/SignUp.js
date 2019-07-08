/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import Details from '../components/signup/Details';
import Footer from '../components/signup/Footer';
import { Link } from 'react-router-dom'


const SignUpHeader = styled.div`
    background: #ffffff
`;

const SignUpTop = styled.nav`
    height: 40px;
    padding: 20px 40px;
    border-bottom: .5px solid #F5F4F9;

    a:nth-child(2) {
        float: right;
        text-decoration: none;
        transform: translateY(10px);
        font-weight: bold;
        font-size: 1.1rem;
        color: rgba(0, 0, 0, 0.7);

        &:hover {
            border-bottom: 1.5px solid rgba(0, 0, 0, 0.7)
        }
    }


`;

const SignUp = () => {
    return (
        <SignUpHeader>
            <SignUpTop>
                <Link to="/"><img src={logo} alt="Netflix Logo"/></Link>
                <Link to="/signin">Sign In</Link>
            </SignUpTop>
            <Details />
            <Footer />
        </SignUpHeader>
    )
}

export default SignUp
