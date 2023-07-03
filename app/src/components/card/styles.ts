import styled from "styled-components";

export const CardVertical = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 4px #818181;
    border-radius: 30px;
    align-items:center;
    background-color: #fff;
    padding: 10px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 4px #232323;
    }
`;

export const CardHorizontal = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 4px #818181;
    border-radius: 30px;
    background-color: #fff;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 5px;
    &:hover {
        box-shadow: 0px 0px 4px #232323;
    }
`;

export const CardImage = styled.img`
    border-radius: 25px;
    width: 222px;
    height: 222px;
`;

export const CardBody = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 5px;

`;

export const CardLabel = styled.div`
    color: #000;
    font-weight: bold;
    font-size: 13px;
`;

export const CardSpan = styled.span`
    width: 144px;
    color: #636363;
    font-weight: normal;
    font-size: 13px;
    word-break: break-all;
`;

export const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 1rem;
    grid-area: content;
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, auto);
    }
`;
