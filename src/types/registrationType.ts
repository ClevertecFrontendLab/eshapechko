import { FormTypeRegistration } from './formType';

export interface RegistrationStateType {
    isLoadingRegistration: boolean;
    data: FormTypeRegistration;
    error: number | null;
    status: boolean;
}
