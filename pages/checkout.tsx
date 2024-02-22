
import { useEffect, useState } from "react";
import { useCart } from "@/src/hooks/useCart";
import { BoxCheckout, BoxContainer } from "@/styles/components/Checkout/checkout.styles";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text,
    Spacer,
} from "@chakra-ui/react";

import CardOrden from "@/src/components/cart/cartOrden";
import Form from "@/src/components/form/form";


const Checkout = () => {
    const { eres, removeToCart } = useCart()
    const [fieldRequired, setFieldRequired] = useState<boolean>(false)

    // useEffect(() => {
    //     totalItems()
    // }, [eres])


    return (
        <BoxCheckout>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/eres'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Orden</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <BoxContainer
                display="flex"
                width="100%"
                gap="40px"
            >
                <Box
                    display="flex"
                    width="100%"
                >
                    <Box
                        display="flex"
                        width="100%"
                        height="100%"
                        overflowY="auto"
                        flexDirection="column"
                        gap="20px"
                        border="1px solid #EBEDEF"
                        padding="10px"
                        borderRadius="20px"
                    >
                        {
                            eres?.map((item, i) => {
                                return (
                                    <CardOrden
                                        key={i}
                                        item={item}
                                        remove={() => removeToCart(item?.id)}
                                    />
                                )
                            })
                        }

                    </Box>
                </Box>

                <Form />
            </BoxContainer >
        </BoxCheckout >
    );
};


export default Checkout;



