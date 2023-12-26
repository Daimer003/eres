import { Box } from "@chakra-ui/react";
import Navbar from "../navbar/navbar";
import { BoxLayaut } from "@/styles/components/Layaut/layaut.styles";
import Footer from "../footer/footer";

interface Props {
    children: any,
}

const Layaut = ({ children }: Props) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            w="100%"
            h="100%"
            position="relative"
        >
            <Navbar />

            <BoxLayaut>
                {children}
            </BoxLayaut>
            <Footer />
        </Box>
    );
}

export default Layaut;