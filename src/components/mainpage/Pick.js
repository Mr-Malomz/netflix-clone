import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { headers, rows_check1, rows_check2, rows_details, rows_price } from '../../data';

const PickContent = styled.div`
    .pick-top {
        display: grid;
        grid-template-columns: 75% 25%;
        width: 85%;
        margin: auto;

        p {
            font-size: 1.4rem;
            margin-top: 50px;
            color: #ffffff;
        }
    }

    table {
        width: 100%;
        margin-top: 2rem;
        border-collapse: collapse;
        border-spacing: 0;

        th {
            text-transform: uppercase;
            padding: 0.8rem;
            color: #ffffff
        }

        tbody{

            tr {

                &:nth-child(odd) {
                    background: #222222;
                }

                td {
                    color: #999999;
                    padding: 0.8rem 1.2rem;
                    text-align: center;

                    &:first-child {
                        text-align: left;
                    }
                }
                
            }
        }
        
    }

    @media(max-width: 700px) {
       .pick-top {
           grid-template-columns: 1fr;
           text-align: center;
           align-content: center
       }

       p {
           font-size: 0.8rem
       }

       td, th {
           font-size: 0.9rem
       }
    }
`;

const ButtonMedium = styled(Button)`
    text-transform: uppercase;
    padding: 15px 20px;
    margin-top: 35px;

    @media(max-width: 700px){
        width: 80%
    }
`;

const Pick = () => {
    return (
        <PickContent>
            <div className="pick-top">
                <p>Choose one plan and watch everything on Netflix.</p>
                <ButtonMedium href="/signup">try 30 days free</ButtonMedium>
            </div>
            <table>
                <thead>
                    {headers.map(header => 
                        <tr key={header.id}>
                        {header.data.map((dat, i) => (
                            <th key={i}>{dat}</th>
                        ))}
                        </tr>)}
                </thead>
                <tbody>
                    {rows_price.map(row => (
                        <tr key={row.id}>
                            <td>{row.title}</td>
                            {row.price.map((pric, i) => (
                                <td key={i}>{pric}</td>
                            ))}
                        </tr>
                    ))}
                    {rows_check1.map(row => (
                        <tr key={row.id}>
                            <td>{row.title}</td>
                            {row.check.map((chec, i) => (
                                <td key={i}>
                                    <i className={`fas ${chec}`}></i>
                                </td>
                            ))}
                        </tr>
                    ))}
                    {rows_details.map(row => (
                        <tr key={row.id}>
                            <td>{row.title}</td>
                            {row.screen.map((scree, i) => (
                                <td key={i}>{scree}</td>
                            ))}
                        </tr>
                    ))}
                    {rows_check2.map(row => (
                        <tr key={row.id}>
                            <td>{row.title}</td>
                            {row.check.map((chec, i) => (
                                <td key={i}>
                                    <i className={`fas ${chec}`}></i>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </PickContent>
    )
}

export default Pick
