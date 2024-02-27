export interface FormTypeLogin {
    email: string;
    password: string;
    remember: boolean;
}

export interface FormTypeRegistration {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface AccountRestore {
    password: string;
    confirmPassword: string;
}
