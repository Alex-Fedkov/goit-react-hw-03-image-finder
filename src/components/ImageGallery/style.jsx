import styled from "styled-components";

export const Ul = styled.ul`
    display: grid;
    max-width: calc(100vw - 50px);
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    padding-top: 20px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;
