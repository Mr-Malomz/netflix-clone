/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { Link } from 'react-router-dom'


const FormContainer = styled.div `
    padding: 40px 70px;
    width: 25%;
    height: 60%;
    background: rgba(0, 0, 0, 0.7);
    margin: auto;
    position: relative;
    z-index: 2;
    transform: translateY(45px);

    @media(max-width: 960px) {
                width: 86vw;
                height: 40%;
                margin: 0;
                padding: 0 40px
            }

    h1 {
        color: #ffffff
    }

    input[type=text], input[type=password] {
        display: block;
        background: #424040;
        border: none;
        width: 90%;
        padding: 20px 20px;
        border-radius: 3px;
        margin-bottom: 15px;

        &::placeholder {
        font-size: 18px;
        color: #999999
    }
    }

    .help {
        color: #999999;
        margin-bottom: 40%;

        a {
            float: right;
            text-decoration: none;
            color: #999999;

            &:hover {
                border-bottom: 1px solid #999999
            }
        }
    }

    .facebook {
        a {
            text-decoration: none;
            color: #999999
        }
        span:nth-child(1){
            color: #3b5998;
            margin-right: 10px;
            font-size: 20px;
        }

        span:nth-child(2) {
            font-size: 14px
        }
    }

    .signup {
        color: #999999;
        margin-top: 10px;

        a {
            color: #ffffff;
            text-decoration: none;
            margin-left: 10px;

            &:hover {
                border-bottom: 1px solid #ffffff
            }
        }
    }

    footer {
        position: absolute;
        bottom: 4%;
    }
    
`;

const ButtonSignUp = styled(Button)`
    width: 93%;
    margin: 20px 0 10px 0;
    font-weight: bold;
    padding: 15px;
    border-radius: 3px;
`;

export default class Form extends Component {
    state = {
        email_num: '',
        password: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {onChange} = this
        const {email_num, password} = this.state
        return (
            <FormContainer>
                <h1>Sign In</h1>
                <form action="">
                    <input type="text" name="email_num" value={email_num}  onChange={onChange} placeholder="Email or Phone Number"/>
                    <input type="password" name="password" value={password}   onChange={onChange} placeholder="Password"/>
                    <ButtonSignUp>Sign In</ButtonSignUp>
                    <div className="help">
                        <input type="checkbox" name="confirm" /> Remember Me
                        <a href="#">Need help?</a>
                    </div>
                </form>
                <footer>
                    <div className="facebook">
                        <a href="#">
                            <span><i className="fab fa-facebook"></i></span> 
                            <span>Login with</span> Facebook
                        </a>
                    </div>
                    <div className="signup">
                        New to Netflix?  <Link to="/signup">Sign up Now</Link>
                    </div>
                </footer>
            </FormContainer>
        )
    }
}
