import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/react";

export const BoxHeader = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 350px;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;  
  z-index: 0;
  margin-top: 80px;
  overflow: hidden;
  @media screen and (width > 900px) {
    height: 500px;
    margin-top: 80px;
  }
`;

export const GridImg = styled(Box)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
  position: relative;
  :before{ 
    display: flex;
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: rgb(255,255,255);
    background: linear-gradient(279deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%);
    z-index: 0;
  }
  img{
    display: block;
    width: auto;
    height: 80px;
    object-fit: cover;
    border-radius: 14px;
    @media screen and (width > 900px) {
       height: 220px;
       border-radius: 28px;
  }
  }
   @media screen and (width > 900px) {
      gap: 20px;
  }
`;

export const BoxText = styled(Text)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  position: absolute;
  z-index: 10;
  margin: 0;
  span{
    width: 100%;
    line-height: 40px;
    font-size: 80px;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 800;
    margin: 0;
    :last-child{
      font-size: 80px;
      line-height: 90px;
    }
  }
  @media screen and (width > 900px) {
    span{
      font-size: 160px;
      line-height: 120px;
      :last-child{
        font-size: 120px;
        line-height: 120px;
    }
    }
  }
`;

export const BoxEres = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 40px;
  img{
    display: block;
    width: 100%;
    height: auto;
  }
  h2 {
    font-family: 'Cormorant Garamond', serif;
  }
  p{
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
  }
  @media screen and (width > 800px) {
    flex-direction: row;
  }
`;

export const BoxTeachers = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 20px;
  h3{
    font-family: 'Cormorant Garamond', serif;
  }
`;

export const BoxRowTeachers = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  gap: 40px;
  @media screen and (width > 900px) {
    flex-direction: row;
    height: auto;
  }
`;


export const BoxContent = styled(Box) <{ imgBackground: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 700px;
  position: relative;
  padding: 60px 20px;
  box-sizing: border-box;
  gap: 20px;
  border-radius: 28px;
  overflow: hidden;

  /* background-image: url(${({ imgBackground }) => imgBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover; */
  h4{
    display: flex;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    text-align: center;
    text-shadow: 1px 1px 2px black;
    transition: all.5s;
    transform: scale(1);
    z-index: 9;
    :hover{
      transition: all.5s;
      transform: scale(1.05);
    }
  }
  /* img{
    border-radius: 60px;
    border: 1px solid #000;
    object-fit: cover;
  } */
  :before{
    display: flex;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-image: url(${({ imgBackground }) => imgBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
  }
  :after{
    display: flex;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0, .7);
    z-index: 0;
  }
`;

export const BoxRehabilitation = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 20px;
  h3{
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    margin: 0;
  }
  p{
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    width: min(600px, 100%);
    margin: 0;
  }
`;

export const BoxRowRehabilitation = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 40px;
  margin-top: 40px;
`;

export const ContentAudio = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 40px;
  position: relative;
  padding: 0 20px;
  z-index: 99;
  //bottom: calc(20px + 20px);
  audio{
    display: none;
    align-items: center;
    width: 100%;
    height: 60px;
    border-radius: 16px;
    border: 2px solid #666;
    background-color: transparent;
    ::-webkit-media-controls-panel {
      background-color: transparent;
      color: #fff;
    }
    ::-webkit-media-controls-overflow-button {
      display: none;
    }
    ::-webkit-media-controls-panel {
      width: auto; /* Restablece el ancho para evitar que se corte el tiempo de reproducción */
    }
  }
  button{
    font-size: 60px;
    color: #9AE4D3;
    border: 1px solid #fff;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.1s;
    :hover{
    transform: scale(1.1);
    }
    @media screen and (width > 900px) {
    font-size: 100px;
  }
  }

`;

