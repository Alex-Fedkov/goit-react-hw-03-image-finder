import styled from "styled-components";

export const ButtonMore = styled.button`
  display: block;
  margin: 20px auto; 
  width: 150px;
  height: 40px;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;

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
