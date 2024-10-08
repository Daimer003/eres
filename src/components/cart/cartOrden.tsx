import { BoxCardOrderImage } from "@/styles/components/Card/cardOrder";
import { Box, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import { BsFillTrash3Fill } from "react-icons/bs";


interface Props {
    remove?: (id) => void
    item: any,
}

const CardOrden = ({ remove, item }: Props) => {

    return (
        <Box
            display="flex"
            w="100%"
            gap="10px"
            backgroundColor="gray.100"
            padding="10px"
            borderRadius="16px"
        >
            <BoxCardOrderImage>
                <Image
                    src={item.image}
                    alt="Imagen del curso"
                    width={150}
                    height={150}
                    priority
                    style={{
                        borderRadius: "16px"
                    }}
                />
            </BoxCardOrderImage>
            <Box
                display="flex"
                flexDirection="column"
                width="100%"
            >
                <Box>
                    <Text
                        as="h3"
                        fontSize="xl"
                        fontWeight="bold"
                    >{item.title}
                    </Text>
                    <Text
                        as="p"
                        fontSize="sm"
                        fontWeight="normal"
                    >{item.text}
                    </Text>
                    <Text
                        as="p"
                        fontSize="sm"
                        fontWeight="medium"
                    >{item.category}
                    </Text>
                </Box>
                <Spacer />
                <Box
                    display="flex"
                    width="100%">
                    <Text
                        as="span"
                        fontSize="xl"
                        fontWeight="bold"
                    >Precio:
                    </Text>
                    <Spacer />
                    <Text
                        as="span"
                        fontSize="xl"
                        fontWeight="bold"
                    > ${item?.price.toLocaleString()}
                    </Text>
                </Box>

            </Box>
            <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                width="auto"
                fontSize="20px"
                marginBottom='5px'
            >
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => remove(item.id)}
                ><BsFillTrash3Fill /> </span>
            </Box>
        </Box>
    );
}

export default CardOrden;