import styled from 'styled-components';

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Nunito Sans', sans-serif;
  padding: 0px 10px;
  text-align: center;
`;

export const InputSearch = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 10px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  @media (min-width: 1024px) {
    width: 450px;
  }
`;