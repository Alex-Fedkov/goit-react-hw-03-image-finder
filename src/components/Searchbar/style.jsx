import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    padding: 12px 24px;
    color: #fff;
    background-color: #3f51b5;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
`;

export const Button = styled.button`
  display: block;
  width: 150px;
  height: 40px;
  border: 0;
  outline: none;

  &:hover,
  :focus {
    color: white;
    background-color: #59d879;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export const Span = styled.span`
  font-size: 22px;
  color: grey;
`;

export const Input = styled.input`
    display: flex;
    width: 100%;
    font-size: 22px;
    border: none;
    outline: none;
    padding-left: 10px;
`;
