import { useContext } from 'react';
import { CartContext } from "@/src/contexts/cartContext";


export const useCart = () => useContext(CartContext);
