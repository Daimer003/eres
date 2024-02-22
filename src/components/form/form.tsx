"use client"
import { useState, useEffect } from "react";
import {
    Stack,
    Input,
    Box,
    Button,
    FormControl,
    FormLabel,
    Select
} from "@chakra-ui/react";
import { useCart } from "@/src/hooks/useCart";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { CheckoutServiceMercadoPago } from "@/src/services/checkout.mercadopago.service";
import { CheckoutServicePaypal } from "@/src/services/checkout.paypal.service";
import { SiMercadopago } from "react-icons/si";


const Form = () => {
    const { eres, removeToCart, currency, currencyType } = useCart()
    const route = useRouter()
    const [total, setTotal] = useState<number>(0)
    const [btnIsDisabled, setBtnIsDisabled] = useState<boolean>(false)
    const router = useRouter()
    const [data, setData] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        currency: "USD"
    })

    //* Suma el price de los items agregados
    const totalItems = () => {
        let total = 0;
        for (let i = 0; i <= eres.length; i++) {
            if (eres[i]?.price) {
                total += eres[i].price;
            }
        }
        setTotal(total)
        if (total == 0) router.push("/")
    }

    const onChangeInput = (event: any) => {
        const { name, value } = event.target
        name == "currency" && currency(value)

        setData({
            ...data,
            [name]: value
        })
    }

    //*Función para crear la orden con Paypal
    const createOrder = async () => {
        try {
            return await CheckoutServicePaypal.merchantOrders(
                1,
                10,
                eres[0]?.title,
                eres[0]?.category,
                eres[0]?.image
            )

        } catch (error) {
            console.log("Error en el pago", error)
        }
    }

    //*Función para crear la orden con mercadopago
    const createOrderMp = async () => {
        let { name, lastname, email, phone } = data
        try {
            const res = await CheckoutServiceMercadoPago.merchantOrders(
                1,
                name,
                lastname,
                email,
                phone,
                10000,
                eres[0]?.title,
                eres[0]?.category,
                eres[0]?.image
            )
            if (res?.api_response.status == 201) {
                router.push(res?.init_point)
            }
        } catch (error) {
            console.log("Error en el pago", error)
            setBtnIsDisabled(false)
        }
    }

    const onApprove = (data) => {
        route.push("/success")
    }

    //* Función para verificar si hay alguna clave sin valor
    const validarObjeto = (d: any) => {
        for (const clave in d) {
            if (
                d.hasOwnProperty(clave) &&
                (
                    d[clave] === undefined ||
                    d[clave] === ""
                )) {
                setBtnIsDisabled(true)
                return
            }
        }
        setBtnIsDisabled(false)
    }

    useEffect(() => {
        console.log(btnIsDisabled)
        validarObjeto(data)
    }, [data])

    return (
        <Box
            display="flex"
            flexDirection="column"
            width="100%"
            gap="20px"
        >

            <form onChange={onChangeInput}>
                <Stack spacing={3}>
                    <FormControl isRequired>
                        <FormLabel>Nombre</FormLabel>
                        <Input
                            type="text"
                            name="name"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Apellidos</FormLabel>
                        <Input
                            type="text"
                            name="lastname"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Correo electronico</FormLabel>
                        <Input
                            type='email'
                            name="email"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Telefono</FormLabel>
                        <Input
                            type='tel'
                            name="phone"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Moneda</FormLabel>
                        <Select
                            placeholder={currencyType}
                            name="currency"
                            value={currencyType}
                        >
                            <option>USD</option>
                            <option>COL</option>
                        </Select>
                    </FormControl>
                </Stack>
            </form>
            <Box>
                {
                    currencyType == "USD" ?
                        <PayPalButtons
                            className="button-paypal"
                            style={{
                                "layout": "horizontal",
                                height: 45,
                                disableMaxWidth: true,
                                color: 'white'
                            }}
                            disabled={btnIsDisabled}
                            fundingSource={undefined}
                            createOrder={createOrder}
                            onApprove={async (data, actions) => {
                                onApprove(data)
                                actions.order.capture()
                            }}
                        /> :
                        <Button
                            width="100%"
                            onClick={createOrderMp}
                            isDisabled={btnIsDisabled}
                        >
                            Mercado pago
                        </Button>
                }
            </Box>
        </Box>
    );
}

export default Form;