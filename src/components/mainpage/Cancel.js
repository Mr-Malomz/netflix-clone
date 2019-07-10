import React from 'react';
import combine from '../../img/combine.png';
import Button from '../Button';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const TabContent = styled.div`
    .container-cancel {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        gap: 20px;
        justify-content: center;

        p {
            font-size: 1.4rem;
            margin-top: 50px;
            color: #ffffff;
        }
    }

    @media(max-width: 700px) {
       .container-cancel, .container-text {
           grid-template-columns: 1fr;
           text-align: center;
       }

       p {
           font-size: 0.8rem
       }
    }
`;

const ButtonMedium = styled(Button)`
    text-transform: uppercase;
    padding: 15px 20px;
    margin-top: 35px;

`;

const Cancel = () => {
    return (
        <TabContent>
            <div className="container-cancel">
                <div className="container-text">
                    <p>If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.</p>
                    <Link to="/signup">
                        <ButtonMedium> try 30 days free</ButtonMedium>
                    </Link>
                </div>
                <img src={combine} alt="screens"/>
            </div>
        </TabContent>
    )
}

export default Cancel
