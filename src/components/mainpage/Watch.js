import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import TV from '../../img/TV.png';
import tablet from '../../img/tablet.png';
import computer from '../../img/computer.png';


const WatchContent = styled.div`
    .watch-top {
        display: grid;
        grid-template-columns: 68% 25%;
        gap: 80px;
        margin-bottom: 100px;
    }
    
    p {
        color: #ffffff;
        font-size: 1.3rem;
        font-weight: 500
    }

    .watch-bottom {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        justify-content: center;
        justify-items: center;
        text-align: center;

        h3 {
            margin: 20px 0 10px 0;
        }

        p {
            font-size: 0.9rem;
            color: #999999;
        }
    }

    @media(max-width: 700px) {
       .watch-top {
           grid-template-columns: 1fr;
           text-align: center;
       }

       h3 {
           font-size: 0.8rem
       }
    }
`;

const ButtonMedium = styled(Button)`
    text-transform: uppercase;
    padding: 15px 20px;
`;

const Watch = () => {
    return (
        <WatchContent>
            <div className="watch-top">
                <p>Watch TV shows and movies anytime, anywhere — personalized for you.</p>
                <ButtonMedium href="/signup">try 30days free</ButtonMedium>
            </div>
            <div className="watch-bottom">
                <div>
                    <img src={TV} alt="TVs"/>
                    <h3>Watch on your TV</h3>
                    <p>Smart TVs, PlayStation, Xbox, <br/> Chromecast, Apple TV, Blu-ray players <br/> and more.</p>
                </div>
                <div>
                    <img src={tablet} alt="tablets"/>
                    <h3>Watch instantly or download for later</h3>
                    <p>Available on phone and tablet, <br/> wherever you go.</p>
                </div>
                <div>
                    <img src={computer} alt="computer"/>
                    <h3>Use any computer</h3>
                    <p>Watch right on Netflix.com.</p>
                </div>
            </div>
        </WatchContent>
    )
}

export default Watch
