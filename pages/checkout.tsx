import { useEffect, useState } from "react";
import { useCart } from "@/src/hooks/useCart";
import { BoxCheckout, BoxContainer } from "@/styles/components/Checkout/checkout.styles";
import {
    Box,
    Input,
    InputGroup,
    InputLeftAddon,
    FormControl,
    FormLabel,
    FormHelperText,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text,
    Spacer,
    Select
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import CardOrden from "@/src/components/cart/cartOrden";
import { CheckoutService } from "@/src/services/checkout.mercadopago.service";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { SiMercadopago } from "react-icons/si";


const Checkout = () => {
    const { eres, removeToCart, currency, currencyType } = useCart()
    const router = useRouter()
    const [total, setTotal] = useState<number>(0)
    const [btnIsDisabled, setBtnIsDisabled] = useState<boolean>(false)
    const [fieldRequired, setFieldRequired] = useState<boolean>(false)

    const [dataForm, setDataForm] = useState<any>({
        name: "",
        lastName: "",
        email: "",
        phone: ""
    })

    //*Valida que no este vacio los campos
    const validField = () => {
        if (
            dataForm.name == "" &&
            dataForm.lastname == "" &&
            dataForm.email == "" &&
            dataForm.phone == ""
        ) {
            setFieldRequired(true)
        } else {
            setFieldRequired(false)
        }
    }

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

    useEffect(() => {
        totalItems()
    }, [eres])

    //* Obtiene los datos del formulario de pago
    const form = (e) => {
        const { value, name } = e.target
        validField()
        setDataForm({
            ...dataForm,
            [name]: value
        })
    }

    //*Función para crear la orden
    const createOrder = async () => {
        setBtnIsDisabled(true)
        const { name, lastName, email, phone } = dataForm
        try {
            const res = await CheckoutService.merchantOrders(
                1,
                name,
                lastName,
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

    //*Tipo de moneda seleccionado (USD / COP)
    const handleCurrency = (e: any) => {
        let c = e.target.value
        currency(c)
    }

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
                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    gap="20px"
                >
                    <FormControl isRequired>
                        <FormLabel>Nombre</FormLabel>
                        <Input type="text" name="name" onChange={form} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Apellidos</FormLabel>
                        <Input type="text" name="lastName" onChange={form} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Dirección de correo electrónico</FormLabel>
                        <Input type='email' name="email" onChange={form} />
                        <FormHelperText>Nunca compartiremos tu correo electrónico.</FormHelperText>
                    </FormControl>
                    <InputGroup >
                        <InputLeftAddon children='+57' />
                        <Input type='tel' placeholder='Número de teléfono' name="phone" onChange={form} />
                    </InputGroup>
                    <FormControl isRequired>
                        <FormLabel>Tipo de moneda</FormLabel>
                        <Select
                            placeholder='Selecciona el tipo'
                            onChange={handleCurrency}
                            value={currencyType}
                        >
                            <option value='COP'>COP</option>
                            <option value='USD'>USD</option>
                        </Select>
                    </FormControl>
                    <Box display="flex">
                        <Text as="span" fontSize="2xl" fontWeight="bold">Total</Text>
                        <Spacer />
                        <Text as="span" fontSize="2xl" fontWeight="bold">${total.toLocaleString()}</Text>
                    </Box>
                    <Box
                        display="flex"
                        width="100%"
                        height="auto"
                        gap="20px"
                    >
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
                                /> :
                                <Button
                                    width="100%"
                                    height="45px"
                                    onClick={() => createOrder()}
                                    isLoading={btnIsDisabled}
                                    isDisabled={btnIsDisabled || fieldRequired}
                                    colorScheme='blue'

                                    leftIcon={<SiMercadopago fontSize="28px" />}
                                >
                                    Pagar con mercado pago
                                </Button>
                        }
                    </Box>

                </Box>
            </BoxContainer>
        </BoxCheckout>
    );
};


export default Checkout;



