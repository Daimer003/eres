import { useCart } from "@/src/hooks/useCart";
import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ButtonPrimary } from "@/styles/components/Button/button.styles";
import { BoxDetailsImage } from "@/styles/components/Details/details.styles";

interface Props {
    itemCourse: any,
    onClose: () => void
}

const Details = ({ itemCourse, onClose }: Props) => {
    const { addToCart, eres } = useCart()

    const add = () => {
        addToCart(itemCourse.id)
        onClose()
        localStorage.setItem("cart", JSON.stringify(eres))
    }

    return (
        <Box
            display="flex"
            alignItems="center"
            width="100%"
            height="100%"
            padding="10px"
            gap="20px">
            <BoxDetailsImage>
                <Image
                    src={itemCourse.image}
                    alt="Imagen del curso"
                    width={350}
                    height={350}
                    style={{
                        borderRadius: "20px"
                    }}
                />
            </BoxDetailsImage>
            <Box
                display="flex"
                flexDirection="column"
                width="100%"
                gap="20px">
                <Box
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                    width="100%">
                    <Text as="span">¡Nuevo Producto!</Text>
                    <Text
                        as="h2"
                        fontSize="2xl"
                        fontWeight="bold"
                        textTransform="uppercase"
                    >
                        {itemCourse.title}
                    </Text>
                    <Text as="p" fontSize="1xl">Valoración integral de tu voz.
                        A partir de estos resultados se brinda una sesión de terapia vocal para brindar las recomendaciones necesarias en tus necesidades vocales (vistas en la valoración).
                        Llegando a una oportuna intervención terapéutica personalizada, mediante diferentes estrategias, técnicas y ejercicios.</Text>
                    <Text as="h4" fontSize="2xl" fontWeight="bold">${itemCourse?.price.toLocaleString()} COP</Text>
                </Box>
                <Box display="flex" width="100%" gap="20px">
                    <Button>Comprar</Button>
                    <ButtonPrimary onClick={() => add()}>Añadir al carrito</ ButtonPrimary>
                </Box>
            </Box>
        </Box>
    );
}

export default Details;