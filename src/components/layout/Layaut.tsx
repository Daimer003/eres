import { Box } from "@chakra-ui/react";
import Navbar from "../navbar/navbar";
import { BoxLayaut } from "@/styles/components/Layaut/layaut.styles";
import Footer from "../footer/footer";

interface Props {
    children: any,
    ruta?: (r: string) => void,
}

const Layaut = ({ children, ruta }: Props) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            w="100%"
            h="100%"
            position="relative"
        >
            <Navbar ruta={ruta} />

            <BoxLayaut>
                {children}
            </BoxLayaut>
            <Footer />
        </Box>
    );
}

export default Layaut;