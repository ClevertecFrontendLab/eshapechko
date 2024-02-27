export interface CheckEmailType {
    isLoadingCheckEmail: boolean;
    isLoadingConfirmEmail: boolean;
    email: string;
    errorCheck: string | null;
    errorConfirm: string | null;
    code: string;
    privateConfirm: boolean;
    privateChange: boolean;
}
