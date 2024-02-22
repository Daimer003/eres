import Card from "@/src/components/card/card";
import { Box, Text } from "@chakra-ui/react";
import { curso } from "@/src/utils/data/data";
import { BoxRehabilitacionVocal, BoxContainer } from "@/styles/components/RehabilitacionVocal/rehabilitacionVocal.styles";

const EntrenaminetoVocal = () => {
    return (
        <BoxRehabilitacionVocal>
            <Box
                display="flex"
                flexDirection="column"
                width="100%"
                maxW="900px"
                alignItems="center"
                justifyContent="center"
            >
                <Text
                    as="h3"
                    fontFamily="'Cormorant Garamond', serif"
                    fontSize="5xl"
                >
                    Entrenamineto Vocal
                </Text>
                <Text
                    as="p"
                    fontSize="18px"
                    fontFamily="'Cormorant Garamond', serif"
                    textAlign="center"
                >
                    Nuestra categoría de Rehabilitación Vocal está diseñada para cuidar y mejorar tu voz hablada y/o cantada. Te ofrecemos los siguientes paquetes especializados para ti:
                </Text>
            </Box>
            <Box
                display="flex"
                width="100%"
                justifyContent="center"
            >
                <Box
                    display="flex"
                    width="100%"
                    justifyContent="center"
                >
                    <BoxContainer>

                        {
                            curso.map((item, i) => {
                                return (
                                    <Card
                                        key={i}
                                        // onClick={() => open(item.id)}
                                        img={item.image}
                                        title={item.title}
                                        text={item.text}
                                        value={item.price} />

                                )
                            })
                        }
                    </BoxContainer>
                </Box>
            </Box>
        </BoxRehabilitacionVocal>
    );
}

export default EntrenaminetoVocal;