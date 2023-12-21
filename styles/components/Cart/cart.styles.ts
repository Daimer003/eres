import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";


export const BoxCart = styled(Box) <{ on: boolean }>`
  display: flex;
  flex-direction: column;
  transition: all .3s ease-in;
  width: ${({ on }) => on ? "400px" : "0"};
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  background: white;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
  top: 0;
  right: ${({ on }) => on ? "0" : "-300px"};
  bottom: 0;
  z-index: 9999;
  gap: 20px;
`;

export const BoxItem = styled(Box)`
  display: flex;
  width: 100%;
  gap: 10px;
  position: relative;
  /* :hover {
    :before{
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(255, 0, 0, 0.5);
      backdrop-filter: blur(4px);
      border-radius: 8px;
      position: absolute;
      z-index: 99;
      display: flex;
      cursor: pointer;
    }
  } */
`;


export const BoxRemove = styled(Box) <{ onHover: boolean }>`
      display: ${({ onHover }) => onHover ? "flex" : "none"};
      justify-content: center;
      align-items: center;
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(255, 0, 0, 0.5);
      backdrop-filter: blur(4px);
      border-radius: 8px;
      position: absolute;
      z-index: 99;
      cursor: pointer;
      border: 1px solid red;
      span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: red;
        color: #fff;
        font-size: 20px;
        border-radius: 4px;
      }
`;