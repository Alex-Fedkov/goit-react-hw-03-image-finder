import styled from "styled-components";

export const Backdrop = styled.div`
position: absolute;
position: fixed;
display: flex;
align-items: center;
justify-content: center;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.8);
z-index: 10;
`;

export const Img = styled.img`
max-width: 80%;
max-height: 90%;
`;
