import { Box, Button, Input, Text } from "@chakra-ui/react";
import { BoxFooter, ButtonFooter } from "@/styles/components/Footer/footer.styles";

const Footer = () => {
    return (
        <Box display="flex" justifyContent="center" width="100%">
            <BoxFooter>
                <Text
                    as="p"
                    fontSize="4xl"
                    fontFamily="'Cormorant Garamond', serif"
                    fontWeight="700">Únete a nuestro newsletter</Text>
                <Box display="flex" width="100%" gap="20px">
                    <Input
                        type="tex"
                        placeholder="Ingresa tu correo electrónico"
                        size='lg'
                    />
                    <ButtonFooter>Enviar</ButtonFooter>
                </Box>
                <Box display="flex" flexDirection="column" gap="20px">
                    <Text as="span">Contáctanos para mayor información</Text>
                    <Text as="p">3183929212</Text>
                </Box>
            </BoxFooter>
        </Box>
    );
}

export default Footer;