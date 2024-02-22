import { ButtonPay, BoxValue, BoxCard, BoxContentImg } from "@/styles/components/Card/card.styles";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
    id?: number,
    img?: string,
    title?: string,
    text?: string,
    value?: number,
    onClick?: () => void
}

const Card = ({ id, img, title, text, value, onClick }: Props) => {

    return (
        < BoxCard>
            <Box
                display="flex"
                flexDirection="column"
                gap="10px"
            >
                <BoxContentImg>
                    <Image
                        src={img}
                        alt="Imagen eres"
                        width={400}
                        height={400}
                    />
                </BoxContentImg>
                <Box
                    display="flex"
                    w="100%"
                    flexDirection="column"
                    alignItems="center"
                    p="20px"
                    gap="10px"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        w="100%"
                        h="110px">
                        <Text as="h4">{title}</Text>
                        <Text
                            as="span"
                            w="100%"
                            textAlign="center"
                        >
                            {text.slice(0, 90)}...
                        </Text>
                    </Box>
                    <Box display="flex" w="100%" flexDirection="row" gap="10px">
                        <ButtonPay onClick={() => onClick()}>Ver más</ButtonPay>
                        <BoxValue as="h4" >${value}</BoxValue>
                    </Box>
                </Box>
            </Box>
        </ BoxCard>
    );
}

export default Card;