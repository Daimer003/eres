import { CheckoutService } from "@/src/services/checkout.service";
import { ButtonPrimary } from "@/styles/components/Button/button.styles";
import {
    Box,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Success = () => {
    const router = useRouter()
    const [details, setDetails] = useState<any>()
    const data = router.query

    //*Obtiene los datos del item pagado, en mercado pago.
    useEffect(() => {
        const reference = data?.collection_id
        if (reference) {
            const success = async () => {
                const response = await CheckoutService.getSuccess(String(reference))
                reference && setDetails(response)
            }
            success()
        }
    }, [data])


    return (
        <Box
            display="flex"
            width="100%"
            height="100%"
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="auto"
                marginTop="80px"
                gap="60px"
            >
                <Text
                    as="h3"
                    fontSize="2xl"
                    display="flex"
                    w="100%"
                    maxW="900px"
                    color="gray.400"
                >Detalles de la compra</Text>
                <Box
                    display="flex"
                    flexDirection="column"
                    w="100%"
                    maxW="900px"
                    gap="20px"
                >
                    <Text
                        as="h2"
                        fontSize="24px"
                    >
                        ¡Felicitaciones, {details?.additional_info.payer.first_name}! Tu pago se realizó con éxito.
                    </Text>
                    <Text
                        as="p"
                        fontSize="18px"
                    >¡Hola, {details?.additional_info.payer.first_name}! En <strong>Eres Voz</strong>, tu voz es la estrella. <br /> Atrévete a explorar su potencial en nuestra academia. <br />Con cursos expertos en canto y manejo vocal, desbloquearás todo tu talento.<br /> Prepárate para una experiencia transformadora y únete a nuestra vibrante comunidad sonora.
                    </Text>
                </Box>
                <Text
                    as="span"
                >
                    Estado de la compra:
                    <Text
                        as="strong"
                        color="#557f75;"
                    >{details?.status == "approved" && "Aprobada"}</Text>
                </Text>
                <TableContainer
                    display="flex"
                    w="100%"
                    maxW="900px"
                    backgroundColor="gray.50"
                    borderRadius="16px"
                >
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Curso</Th>
                                <Th>Duración</Th>
                                <Th isNumeric>Precio</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{details?.additional_info.items[0].title}</Td>
                                <Td>{details?.additional_info.items[0].description}</Td>
                                <Td isNumeric>{Number(details?.additional_info.items[0].unit_price).toLocaleString()}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Box
                    display="flex"
                    w="100%"
                    maxW="900px"
                    height="40px"
                    gap="20px"
                >
                    <ButtonPrimary onClick={() => router.push("/")}>Ver mas cursos</ButtonPrimary>
                    <Button
                        width="100%"
                        maxWidth="200px"
                    >Whatsapp Eres Voz</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Success;