import styled from 'styled-components';

const Button = styled.a`
    display: inline-block;
    background: #e50914;
    color: #ffffff;
    padding: 0.4rem 1.0rem;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    border: none;
    margin-right: 0.5rem;
    outline: none;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    border-radius: 2px;
    text-decoration: none;

    &:hover {
        opacity: 0.9;
        transition: all 0.1s linear;
    }

    @media(max-width:960px) {
        font-size: 1.3rem
    }
`;

export default Button;