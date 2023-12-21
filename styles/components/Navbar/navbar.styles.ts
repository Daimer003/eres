import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";


export const BoxContainerNav = styled(Box) <{ fixed: boolean }>`
  display: flex;
  position: ${({ fixed }) => fixed ? "fixed" : "absolute"};
  justify-content: center;
  box-shadow: ${({ fixed }) => fixed ? "2px 2px 2px 1px rgba(0, 0, 0, 0.2)" : ""};
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const BoxNav = styled(Box)`
  display: flex;
  width: min(1600px, 100%);
  height: auto;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
  z-index: 99;
  background-color: white;
`;

export const BoxMenuDesktop = styled(Box)`
  display: none;
  align-items: center;
  width: 100%;
  gap: 20px;
  span{
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

  }
  @media screen and (width > 900px) {
    display: flex;
  }
`;

export const BoxMenu = styled(Box)`
  display: none;
  height: auto;
  span{
    font-size: 20px;
    cursor: pointer;
  }
  @media screen and (width < 900px) {
    display: flex;
    align-items: center;
  }
`;

export const BoxShop = styled(Box) <{ n: number }>`
  display: flex;
  width: 22px;
  height: 22px;
  font-size: 22px;
  position: relative;
  cursor: pointer;
  :before{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    content: "${({ n }) => n}";
    width: 20px;
    height: 20px;
    padding: 1px;
    position: absolute;
    top: -10px;
    right: -12px;
    font-size: 16px;
    background-color: #9AE4D3;
  }
`;