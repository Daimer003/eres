import React, { createContext, useEffect, useReducer } from 'react';
import { Action, EREsState, InitalizeAction } from "@/src/models/eres";
import { curso } from '../utils/data/data';

const initialEREState: EREsState = {
    isInitialized: false,
    eres: null,
    filter: "Black",
    filteredEres: null,
    currency: "USD"
}

const handlers: Record<
    string,
    (state: EREsState, action: Action) => EREsState
> = {
    INITIALIZE: (state: EREsState, action: InitalizeAction): EREsState => {
        const { filter, eres, filteredEres } =
            action.payload;

        return {
            ...state,
            isInitialized: true,
            eres,
            filter,
            filteredEres
        };
    },
};

const reducer = (state: EREsState, action: Action): EREsState =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

export const ERESContext = createContext({
    ...initialEREState,
});

const ERESProvider = (props: any) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialEREState);

    useEffect(() => {
        const initialize = async () => {

            dispatch({
                type: "INITIALIZE",
                payload: {
                    isInitialized: true,
                    filter: "Black",
                    filteredEres: null,
                    eres: curso,
                    currency: "USD"
                }
            })

        }
        initialize().then();
    }, []);

    const changeCurrency = () => {
        console.log("currency")
    }

    return (
        <ERESContext.Provider value={{
            ...state,
        }}>
            {children}
        </ERESContext.Provider>
    );
};

export default ERESProvider;