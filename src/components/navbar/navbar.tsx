import { useEffect, useState } from "react";
import { Box, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import {
    BoxContainerNav,
    BoxNav,
    BoxMenu,
    BoxMenuDesktop,
    BoxShop
} from "@/styles/components/Navbar/navbar.styles";
import { GrShop } from "react-icons/gr";
import { HamburgerIcon } from '@chakra-ui/icons'
import { useCart } from "@/src/hooks/useCart";
import Cart from "../cart/cart";
import Link from "next/link";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { eres } = useCart()
    const [itemsCart, setItemsCart] = useState<boolean>(false)


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

    const onCart = () => {
        setItemsCart(!itemsCart)
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
                        <Link href="/eres">Inicio</Link>
                        <Link href="/rehabilitacionvocal">Rehabilitación vocal</Link>
                        <Link href="/entrenamientovocal">Entrenamiento Vocal</Link>
                    </Box>
                    <Spacer />
                    <Box display="flex" gap="10px" fontWeight="600">
                        <BoxShop n={eres?.length}><span onClick={() => onCart()}><GrShop /></span></BoxShop>
                        <span>USD</span>
                    </Box>
                </BoxMenuDesktop>
                <BoxMenu>
                    <span><HamburgerIcon boxSize={8} /></span>
                </BoxMenu>
            </BoxNav >
            <Cart onClose={itemsCart} onOpen={() => onCart()} />
        </BoxContainerNav>
    );
}

export default Navbar;