import { ReactNode, createContext, FC, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { englishTranslate } from '@/src/utils/translate/english';
import { spanishTranslate } from '@/src/utils/translate/spanish';
import { TranslateInterface } from '@/src/models/translate';

interface LocaleState {
    locale: string | null;
    t: TranslateInterface;
}

interface LocaleContextValues extends LocaleState {
    setLocale: (locale: LocaleEnum) => Promise<void>;
    getTranslate: (locale: LocaleEnum) => any;
}

interface LocaleProviderProps {
    children: ReactNode;
}

type SetLocaleAction = {
    type: 'SET_LOCALE',
    payload: {
        locale: string;
        t: TranslateInterface;
    }
}

type InitializeLocaleAction = {
    type: "INITIALIZE_LOCALE",
    payload: {
        locale: string;
        t: TranslateInterface;
    }
}

export enum LocaleEnum {
    ES = 'es',
    EN = 'en',
    KR = 'kr',
}

type Action = SetLocaleAction | InitializeLocaleAction

const initialLocaleState: LocaleState = {
    locale: "es",
    t: spanishTranslate
}

const handlers: Record<
    string,
    (state: LocaleState, action: Action) => LocaleState
> = {
    SET_LOCALE: (state: LocaleState, action: SetLocaleAction): LocaleState => (
        {
            ...state,
            locale: action.payload.locale,
            t: action.payload.t,
        }
    ),
    INITIALIZE_LOCALE: (state: LocaleState, action: InitializeLocaleAction) => ({
        ...state,
        locale: action.payload.locale,
        t: action.payload.t,
    })
}

const reducer = (state: LocaleState, action: Action): LocaleState =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

export const LocaleContext = createContext<LocaleContextValues>({
    ...initialLocaleState,
    setLocale: () => Promise.resolve(),
    getTranslate: () => Promise.resolve(),
});

export const LocaleProvider: FC<LocaleProviderProps> = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialLocaleState);
    const router = useRouter();
    /*const isReady = router.isReady;*/
    const { locale } = router.query;

    useEffect(() => {

        const initialize = async (): Promise<void> => {
            if (!!locale && typeof locale == "string") {
                const validLocale = LocaleEnum[locale.toUpperCase()] || LocaleEnum.ES;
                localStorage.setItem("locale", validLocale);
                dispatch({
                    type: 'INITIALIZE_LOCALE',
                    payload: {
                        locale,
                        t: (locale == LocaleEnum.EN ? englishTranslate : spanishTranslate)
                    }
                })
            } else {
                const localstoragelocale = localStorage.getItem("locale");
                if (localstoragelocale) {
                    dispatch({
                        type: 'INITIALIZE_LOCALE',
                        payload: {
                            locale: localstoragelocale,
                            t: (localstoragelocale == LocaleEnum.EN ? englishTranslate : spanishTranslate)
                        }
                    })
                }
            }
        };

        initialize();
    }, [locale])

    const setLocale = async (locale: string) => {
        const validLocale = LocaleEnum[locale.toUpperCase()] || LocaleEnum.ES;
        localStorage.setItem("locale", validLocale);
        dispatch({
            type: "SET_LOCALE",
            payload: {
                locale,
                t: (locale == LocaleEnum.EN ? englishTranslate : spanishTranslate)
            }
        });
    }

    const getTranslate = (locale: LocaleEnum) => (locale == LocaleEnum.EN ? englishTranslate : spanishTranslate);

    return (
        <LocaleContext.Provider value={{
            ...state,
            setLocale,
            getTranslate,
        }}>
            {children}
        </LocaleContext.Provider>
    )
}

LocaleProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const LocaleConsumer = LocaleContext.Consumer;