/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

const FooterSignContainer = styled.div`
    background: #F5F4F4;
    width: 100%;
    margin-top: 10%;
    height: 150px;

    .main-footer {
        margin: 0 5%;
    }

    a {
        color: #999999;
        text-decoration: none;

        &:hover {
            color: #000000
        }
    }

    .contentSign-footer {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 25px;
        font-size: 0.8rem;
        width: 73%;
    }

    @media(max-width: 960px){
        .contentSignUp {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

const footerData = [
    {
        top: ['FAQ', 'Help Center', 'Terms of Use', 'Privacy'],
        bottom: ['Cookie Preferences', 'Corporate Information']
    }
]

const Footer = () => {
    return (
        <FooterSignContainer>
            <div className="main-footer">
                <a href="#">Questions? Contact us.</a>
                <div className="contentSign-footer">
                    {footerData.map((datas) => (
                        datas.top.map((data, i) => (
                            <a key={i} href="#">{data}</a>
                        ))
                    ))}
                </div>
                <div className="contentSign-footer contentSignUp">
                    {footerData.map((datas) => (
                        datas.bottom.map((data, i) => (
                            <a key={i} href="#">{data}</a>
                        ))
                    ))}
                </div>
            </div>
        </FooterSignContainer>
    )
}

export default Footer
