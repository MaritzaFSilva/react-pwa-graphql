import { styled } from "styled-components";

export const HeaderStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const SearchSytle = styled.input`
    display: block;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 20px;
    margin-left: 10px;
`;

export const ContainerHeader = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonStyle = styled.button`
    display: block;
    height: 25px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 20px;
    margin-left: 10px;
    text-decoration: none;
`;

export const FriendsList = styled.button`
   margin-top: 15px;
`;
