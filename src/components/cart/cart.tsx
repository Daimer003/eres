import { useEffect, useState } from "react";
import { useCart } from "@/src/hooks/useCart";
import { BoxCart, BoxItem, BoxRemove } from "@/styles/components/Cart/cart.styles";
import { Box, Button, Spacer, Text } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsFillTrash3Fill } from "react-icons/bs";

import { GrShop } from "react-icons/gr";

interface Props {
    onClose: boolean,
    onOpen: () => void
}


const Cart = ({ onClose, onOpen }: Props) => {
    const { eres, removeToCart } = useCart()
    const route = useRouter()
    const [hovered, setHovered] = useState(false);

    /** 
    * Si el numero agregado al carrito es diferente abre los agregados.
    * @param eres?.length: -Cantidad de items agregados
    * -onOpen() función para ebrir el carrito 
    */
    useEffect(() => {
        if (eres?.length !== 0)
            onOpen()
    }, [eres?.length])

    const openCheckout = () => {
        route.push("/checkout")
        onOpen()
    }
    //* Maneja el estado del hover para eliminar el item
    const handleMouseLeave = () => {
        setHovered(!hovered);
    };

    return (
        <BoxCart on={onClose}>
            <Box>
                <span onClick={() => onOpen()}>
                    <FiChevronRight
                        fontSize="30px"
                        color="#000000"
                        cursor="pointer"
                    />
                </span>
            </Box>

            <Box display="flex" flexDirection="column" gap="20px">
                {eres?.map((item, i) => {
                    return (
                        <BoxItem key={i} onMouseEnter={handleMouseLeave}>
                            <BoxRemove
                                onMouseLeave={handleMouseLeave}
                                onHover={hovered}
                            >
                                <span
                                    onClick={() => removeToCart(item?.id)}
                                >
                                    <BsFillTrash3Fill />
                                </span>
                            </BoxRemove>
                            <Image
                                src={item.image}
                                alt="Imagen del curso"
                                width={80}
                                height={80}
                                priority
                                style={{
                                    borderRadius: "8px"

                                }}
                            />
                            <Box
                                display="flex"
                                width="100%"
                                flexDirection="column"
                            >
                                <Text
                                    as="h3"
                                    fontSize="16px"
                                    fontWeight="bold"
                                    lineHeight="1.1"
                                >{item.title}</Text>
                                <Spacer />
                                <Text
                                    as="p"
                                    fontSize="xs"
                                    fontWeight="normal"
                                >{item.text.slice(0, 20)}...</Text>

                                <Text
                                    as="p"
                                    fontSize="xs"
                                    fontWeight="medium"
                                >{item.category}</Text>
                                <Text
                                    display="flex"
                                    as="p"
                                    fontSize="sm"
                                    fontWeight="bold"
                                    padding="1px 5px"
                                    borderRadius="6px"
                                    backgroundColor="gray.100"
                                >
                                    <>Precio:</>
                                    <Spacer />
                                    <>${item.price.toLocaleString()}</></Text>

                            </Box>
                        </BoxItem >
                    )
                })}
                <Button onClick={() => openCheckout()}>Crear orden</Button>
            </Box>
        </BoxCart>
    );
}

export default Cart;