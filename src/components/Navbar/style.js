import styled from "styled-components";

export const Container = styled.div`
  background-color: #212121;
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Container.Title = styled.h3`
  cursor: pointer;
  color: white;
  :hover {
    transition: 0.5s;
    transform: scale(1.02);
  }
`;
