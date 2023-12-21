import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

export const BoxDetailsImage = styled(Box)`
  display: none;
  width: 100%;
  height: auto;
  @media screen and (width > 900px) {
    display: flex;
  }
`;
