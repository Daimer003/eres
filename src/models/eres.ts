
export interface EREsState {
    isInitialized: boolean;
    filter: string;
    eres: ERESDatum[] | null;
    filteredEres: ERESDatum[] | null;
    currency: string
}

export type InitalizeAction = {
    type: 'INITIALIZE';
    payload: {
        isInitialized: boolean;
        filter: string;
        eres: ERESDatum[] | null;
        filteredEres: ERESDatum[] | null;
        currency: string
    };
}

export interface ERESData {
    status: boolean;
    data: ERESDatum[];
}

export interface ERESDatum {
    id: number;
    image: string;
    name: string;
    title: string;
    category: string;
    text: string;
    price: number;
}

export type Action =
    | InitalizeAction
