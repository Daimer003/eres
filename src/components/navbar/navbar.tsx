import { useEffect, useState } from "react";
import {
    Box,
    Spacer,
    MenuList,
    Menu,
    MenuButton,
    IconButton,
    MenuItem
} from "@chakra-ui/react";
import Image from "next/image";
import {
    BoxContainerNav,
    BoxNav,
    BoxMenu,
    BoxMenuDesktop,
    BoxShop
} from "@/styles/components/Navbar/navbar.styles";
import { GrShop } from "react-icons/gr";
import { useCart } from "@/src/hooks/useCart";
import Cart from "../cart/cart";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";


const Navbar = () => {
    const [show, setShow] = useState(false);
    const { eres, currencyType, currency } = useCart()
    const [itemsCart, setItemsCart] = useState<boolean>(false)
    const [change, setChange] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    //*Si el desplazamiento es mayor a 30, cambia el estado
    const listenToScroll = () => {
        let heightToShow = 30;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        if (winScroll > heightToShow) {
            !show && setShow(true);
        } else {
            setShow(false);
        }
    }

    /** 
     * Abre la bolsa para ver los items agregados
     * @param listening: -Boolean false cerrado / true abierto
     */
    const onCart = (listening: boolean) => {
        setItemsCart(listening)
    }

    //*Cambia el estado
    const changeMoney = () => {
        setChange(prov => !change)
        switch (change) {
            case true: currency("COP")
                break;
            case false: currency("USD")
                break;
        }
    }


    return (
        <BoxContainerNav fixed={show}>
            <BoxNav>
                <Box w="60%">
                    <Image src="/assets/logo.svg" alt="Logo de eres" width={85} height={60} />
                </Box>
                <Spacer />
                <BoxMenuDesktop>
                    <Box display="flex" gap="60px">
                        <Link
                            href="/eres"
                        >
                            Inicio
                        </Link>
                        <Link
                            href="/rehabilitacionVocal"
                        >
                            Rehabilitación vocal
                        </Link>
                        <Link
                            href="/entrenamientoVocal"
                        >
                            Entrenamiento Vocal
                        </Link>
                    </Box>
                    <Spacer />
                    <Box display="flex" gap="10px" fontWeight="600">
                        <BoxShop n={eres?.length}><span onClick={() => onCart(true)}><GrShop /></span></BoxShop>
                        <span onClick={() => changeMoney()}>{currencyType}</span>
                    </Box>
                </BoxMenuDesktop>
                <BoxMenu>
                    <Box ml={2} >
                        <Menu
                            isLazy
                            id="navbar-menu"
                        >
                            <MenuButton
                                as={IconButton}
                                colorScheme="gray.900"
                                icon={<MdOutlineMenu />}
                                fontSize="2xl"
                                color="gray.900"
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList
                                display="flex"
                                flexDirection="column"
                                padding="10px"
                                gap="10px"
                                marginTop="20px"
                            >     <Link href="/" >
                                    <MenuItem >
                                        Home
                                    </MenuItem>
                                </Link>
                                <Link href="/rehabilitacionVocal" >
                                    <MenuItem >
                                        Rehabilitación vocal
                                    </MenuItem>
                                </Link >
                                <Link href="/entrenamientoVocal" >
                                    <MenuItem >
                                        Entrenamiento Vocal
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </BoxMenu>
            </BoxNav >
            <Cart onClose={itemsCart} onOpen={onCart} />


        </BoxContainerNav >
    );
}

export default Navbar;