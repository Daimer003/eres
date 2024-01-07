import React, { createContext, useEffect, useReducer } from "react";
import { Action, AddToCart, CartContextValue, CartState, InitalizeAction, RemoveToCart, CheckoutCart } from "@/src/models/cart";
import { curso } from "../utils/data/data";

const initialCartState: CartState = {
  eres: [],
  eresIds: [],
  currency: "USD"
};

const handlers: Record<string, (state: CartState, action: Action) => CartState> = {
  INITIALIZE: (state: CartState, action: InitalizeAction): CartState => {
    const { eres } = action.payload;
    return {
      ...state,
      eres: eres
    };
  },

  ADD_TO_CART: (state: CartState, action: AddToCart): CartState => {
    const { eres } = action.payload;
    const thisERESIsAlreadyIn = state.eres.find((eresId) => eresId.id === eres.id);
    if (thisERESIsAlreadyIn) return { ...state };

    const cartERES = [...state.eres, eres];
    return {
      ...state,
      eres: cartERES,
      eresIds: cartERES.length && cartERES.reduce((acc, eres) => [...acc, eres.id], []),
    };
  },

  REMOVE_TO_CART: (state: CartState, action: RemoveToCart): CartState => {
    const { id } = action.payload;
    const cartERES = state.eres.filter((eresId) => eresId.id !== id);
    return {
      ...state,
      eres: cartERES,
      eresIds: cartERES.length && cartERES.reduce((acc, eres) => [...acc, eres.id], []),
    };
  },

  CHECKOUT_CART: (state: CartState, action: CheckoutCart): CartState => {
    const { currency } = action.payload;
    return {
      ...state,
      eres: [],
      eresIds: [],
      currency: currency
    };
  },
};

const reducer = (state: CartState, action: Action): CartState =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const CartContext = createContext<CartContextValue>({
  ...initialCartState,
  addToCart: async () => Promise.resolve(),
  removeToCart: async () => Promise.resolve(),
  checkout: async () => Promise.resolve(),
});

const CartProvider = (props: any) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialCartState);


  useEffect(() => {
    const initialize = async () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || []
      dispatch({
        type: 'INITIALIZE',
        payload: {
          eres: cart
        }
      })
    }
    initialize();
  }, [])


  const addToCart = async (eres: number) => {

    curso.map((item) => {
      if (item.id == eres) {
        dispatch({
          type: "ADD_TO_CART",
          payload: {
            eres: item
          },
        });
      } else {
        console.log("error tomando el nft");
      }
    })
  };

  const removeToCart = async (id: number) => {
    const thisIdExistOnState = state.eres.find((eresId) => eresId.id == id);
    if (thisIdExistOnState) {
      dispatch({
        type: "REMOVE_TO_CART",
        payload: {
          id,
        },
      });
    }
  };

  const checkout = async (currency: string, price: number) => {
    try {
      dispatch({
        type: "CHECKOUT_CART",
        payload: {
          currency: currency
        }
      });

    } catch (e) {
      if ("Funds" === "Funds") {
        // Handle the error appropriately
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeToCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
