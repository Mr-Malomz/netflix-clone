import React, { Component } from 'react';
import styled from 'styled-components'; 
import Cancel from '../components/mainpage/Cancel';
import Watch from '../components/mainpage/Watch';
import Pick from '../components/mainpage/Pick';
import Footer from '../components/mainpage/Footer';

const Navs = styled.div`
    
    .container-BTL {
        padding-top: 2.5rem;
        background: #141414;

        .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: 85%;
            gap: 80px;
            justify-content: center;
            text-align: center;
            margin: auto;

            .tab-cancel,
            .tab-watch,
            .tab-pick {
                cursor: pointer;

                &:hover {
                    color: #ffffff;
                }

                p {
                    font-size: 1.1rem;
                    padding: 1em
                }
                &.active {
                    border-bottom: 5px solid red;
                    color: #ffffff
                }
            }
        }
    }

    .layout-content {
            border-top: 3px solid #3d3d3d;

            .lay-content-items {
                width: 75%;
                margin:40px auto;
            }
        }
    
    @media(max-width: 960px) {
        .hide-sm {
            display: none;
        }
        
        .tab-cancel {
            padding-bottom: 15px;
        }
    }
`;


export default class BottomLayout extends Component {
    state = {
        display: 'cancel'
    };

    handleClick = (e) => {
        this.setState({
            display: e.currentTarget.id
        });  
    };

    showContent = (value) => {
        switch (value) {
            case 'cancel':
                return  <Cancel />
            case 'watch':
                return <Watch />
            case 'pick':
                return <Pick />

            default:
                return null;
        }
    }


    render() {
        const {display} = this.state;
        const {handleClick, showContent} = this;
        return (
            <Navs>
                <div className="container-BTL">
                    <div className="container">
                        <div className={`tab-cancel ${display === 'cancel' ? 'active' : null}`} onClick={handleClick} id ="cancel">
                            <i className="fas fa-door-open fa-3x">
                                <p className="hide-sm">No commitments <br/> Cancel online at anytime</p>
                            </i>
                        </div>
                        <div className={`tab-watch  ${display === 'watch' ? 'active' : null}`} onClick={handleClick} id ="watch">
                            <i className="fas fa-desktop fa-3x">
                                <p className="hide-sm">Watch anywhere</p>
                            </i>
                        </div>
                        <div className={`tab-pick ${display === 'pick' ? 'active' : null}`} onClick={handleClick} id ="pick">
                            <i className="fas fa-tags fa-3x">
                                <p className="hide-sm">Pick your price</p>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="layout-content">
                    <div className="lay-content-items">
                        {showContent(display)}
                        <Footer />
                    </div>
                </div>
            </Navs>
        )
    }
}
