import styled from "@emotion/styled";
import { Button, Text, Box } from "@chakra-ui/react";

export const BoxCard = styled(Box)`
  display: flex;
  width: min(400px, 100%);
  height: auto;
  border: 1px solid #000000;
  border-radius: 28px;
  overflow: hidden;
  margin: auto;
  span{
    color: #DA2A2A;
    font-size: 14px;
  }
  h4{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    margin: 0;
  }
`;

export const ButtonPay = styled(Button)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  padding: 10px;
  box-sizing: border-box;
  font-family: 800;
  font-size: 18px;
  border-radius: 8px;
`;

export const BoxValue = styled(Text)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background: #9AE4D3;
  color: #000000;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500!important;
  padding: 10px;
  box-sizing: border-box;
  font-family: 800;
  font-size: 18px;
  border-radius: 8px;
`;


export const BoxContentImg = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;
  overflow: hidden;
  img{
    display: block;
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;