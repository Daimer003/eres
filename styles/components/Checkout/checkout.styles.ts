import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

export const BoxCheckout = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: auto;
  margin-top: 100px;
`;

export const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: auto;
  @media screen and (width > 1200px){
    flex-direction: row;
  }
`;

