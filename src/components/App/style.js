import styled from "styled-components";

export const MainContainer = styled.div``;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 40%;
  border: none;
  border-bottom: 2px solid #d6d6d6;
  padding: 10px 0;
  font-size: 20px;
  :focus {
    box-shadow: none;
    border-bottom: 2px solid #212121;
    outline: none;
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0px 0px 10px #d2d2d24d;
  padding: 20px;
  border-radius: 20px;
  margin: 5% auto;
  text-align: center;
`;

export const Info = styled.div``;

export const Details = styled.div`
  margin-top: 30px;
`;

Details.CityName = styled.h2`
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

export const CityTemp = styled.div`
  font-size: 20px;
  margin: 15px 0;
  text-transform: uppercase;
  font-weight: 400;
`;
