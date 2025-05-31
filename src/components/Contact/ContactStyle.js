import styled from "styled-components";

export const MailButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 200px;
    text-align: center;
    padding: 8px 15px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
    }    
    
    @media (max-width: 640px) {
        padding: 8px 15px;
        font-size: 16px;
    } 

`;