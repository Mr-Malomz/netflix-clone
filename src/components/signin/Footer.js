/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 17%;
    bottom: 0%;
    z-index: 2;
    
    @media(max-width: 960px) {
        border-top: 1px solid #ffffff;
        bottom: 120px
    }

    .main-footer {
        margin: 2% 15%
    }

    a {
        color: #999999;
        text-decoration: none;

        &:hover {
            border-bottom: 1px solid #ffffff;
            width: 110px;
        }
    }

    .content-footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 25px;
        font-size: 0.8rem;
    }

    @media(max-width: 960px) {
        .main-footer{
            margin: 5%
        }
    }
    
`;

const footerData = ['Gift Card Terms', 'Terms of Use', 'Privacy Statement']

const Footer = () => {
    return (
        <FooterContainer>
            <div className="main-footer">
                <a href="#">Questions? Contact us.</a>
                <div className="content-footer">
                    {footerData.map((data, i) => (
                        <a key={i} href="#">{data}</a>
                    ))}
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer
