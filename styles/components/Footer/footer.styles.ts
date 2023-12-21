import styled from "@emotion/styled";
import { Box, Button } from "@chakra-ui/react";


export const BoxFooter = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(600px, 100%);
  height:auto;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;  
  margin-top: 80px;
  span{
    text-align: center;
  }
  p{
    text-align: center;
  }
`;

export const ButtonFooter = styled(Button)`
  display: flex;
  width: min(250px, 100%);
  height:auto;
  background: #5A7B74;
  color: #fff;
`;