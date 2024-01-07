import { ERESDatum } from "@/src/models/eres";

export interface CartState {
    eres: ERESDatum[];
    eresIds: number[];
    currency: string
}

export interface CartContextValue extends CartState {
    addToCart: (id: number) => Promise<void>;
    removeToCart: (id: number) => Promise<void>;
    checkout: (currency: string, price: number) => Promise<void | { ids: number[] }>;
}


export type InitalizeAction = {
    type: 'INITIALIZE';
    payload: {
        eres: ERESDatum[];
    };
}

export type RemoveToCart = {
    type: 'REMOVE_TO_CART';
    payload: {
        id: number;
    };
}

export type CheckoutCart = {
    type: 'CHECKOUT_CART';
    payload: {
        currency: string;
    };
}

export type AddToCart = {
    type: 'ADD_TO_CART';
    payload: {
        eres: ERESDatum;
    };
}

export type Action =
    | InitalizeAction
    | AddToCart
    | RemoveToCart
    | CheckoutCart

