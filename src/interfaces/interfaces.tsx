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
    content? : string;
}


export interface AppState{
  books: Book[];
  user: User;
  loading: boolean;
}

export interface SignIn {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  name? : string;
  email : string;
  password? : string;
  id?: string;
  token?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  genre: string;
  price: number;
  emailUsuario?: string;
}


