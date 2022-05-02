import { CSSProperties } from "react";

export interface ComponentExtendStyle {
    className?: string;
    style?: CSSProperties;
}

export interface PropsButton extends ComponentExtendStyle {
    content: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    buttonIcon?: string;
    [x: string]: any;
}

export interface PropsAppTitle extends ComponentExtendStyle {
    content?: string;
}


export interface AppState {
    accounts: Account[];
    loading: boolean;
}

export interface CreditCard {
    name: string,
    description: string,
    handlingFee: string,
    image: string
}

export interface User {
    id: string;
    name: string;
    maritalStatus: number;
    birthDay: string;
    address: number;
    city?: string;
    email: string,
    phone: string,
    terms: false
}

export interface Account {
    user: User,
    type: string
}

export interface Tag {
    name: string
}

export const CREDIT_CARD_OPTION = [
    {
        name: "American Express Libre",
        value: 1
    },
    {
        name: "MasterCard Ideal",
        value: 2
    },
    {
        name: "MasterCard Joven",
        value: 3
    },
    {
        name: "MasterCard Clasica",
        value: 3
    },
    {
        name: "Visa Clásica",
        value: 3
    }
]

export const ACCOUNT_TYPE = [
    {
        name: "Cuenta ahorro",
        value: 1
    },
    {
        name: "Cuenta corriente",
        value: 2
    },
]


