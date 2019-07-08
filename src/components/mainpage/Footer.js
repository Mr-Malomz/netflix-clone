/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { footers } from '../../data'

const FooterWrapper = styled.div`
    margin-top: 130px;

    p {
        margin-bottom: 25px;
    }

    a {
        color: #999999;
        font-size: 0.9rem;
        text-decoration: none;
    }
    .footer-cont-wrap {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        ul {
            list-style: none;

            li {
                margin-bottom: 12px;

                a {
                    font-size: 0.8rem
                }
            }
        }
    }
    
    @media(max-width: 960px) {
        .footer-cont-wrap {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 2rem;
        }
    }

`;

const Footer = () => {
    return (
        <FooterWrapper>
            <p><a href="#">Questions? Contact Us</a></p>
            <div className="footer-cont-wrap">
                {footers.map((footer, i) => (
                    <ul key={i}>
                        {footer.data.map((foot, i) => (
                            <li key={i}><a href="#">{foot}</a></li>
                        ))}
                    </ul>
                ))}
            </div>
        </FooterWrapper>
    )
}

export default Footer
