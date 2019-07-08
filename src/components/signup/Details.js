import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const DetailsContainer = styled.div`
    width: 25%;
    margin: 5% auto;

    i.fa-check-circle{
        color: red;
        display: block;
        text-align: center
    }

    i {
        color: red;
    }
    

    small {
        text-transform: uppercase;
        display: block;
        text-align: center;
        margin: 20px 0 0 0;

        span {
            font-weight: bold;
        }
    }

    h1 {
        margin: 0;
        text-align: center
    }

    .signup-item {
        display:grid;
        grid-template-columns: 10% 80%;
        align-items: center;
        justify-content: center;

        p {
            color: rgba(0, 0, 0, 0.7);
            padding: 0;
            margin-bottom: 5px
        }
    }

    @media(max-width: 960px){
        width: 50%;

        h1 {
            font-size: 1.5rem
        }
    }
`;

const PlanButton = styled(Button)`
    text-transform: uppercase;
    width: 85%;
    padding: 10px;
    margin-top: 30px
`;

const Details = () => {
    return (
        <DetailsContainer>
            <i className="far fa-check-circle fa-3x"></i>
            <small>step <span>1</span> of <span>3</span></small>
            <h1>Choose your plan.</h1>
            <div className="signup-item">
                <i className="fas fa-check"></i> 
                <p>You won't be charged until after <br/> your free month.</p>
            </div>
            <div className="signup-item">
                <i className="fas fa-check"></i> 
                <p>We'll remind you three days before <br/> your trial ends.</p>
            </div>
            <div className="signup-item">
                <i className="fas fa-check"></i> 
                <p>No commitments, cancel anytime.</p>
            </div>
            <PlanButton>see the plans</PlanButton>
        </DetailsContainer>
    )
}

export default Details
