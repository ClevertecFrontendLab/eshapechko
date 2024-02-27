import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API, AUTH_REGISTRATION } from '../../../api';
import { FormTypeRegistration } from '../../../types/formType';
import { push } from 'redux-first-history';
import { RegistrationStateType } from '../../../types/registrationType';

export const registrationFetch = createAsyncThunk<
    FormTypeRegistration,
    FormTypeRegistration,
    { rejectValue: number }
>('registration/registrationFetch', async (formData, { dispatch, rejectWithValue }) => {
    try {
        const res = await axios.post(
            `${URL_API}${AUTH_REGISTRATION}`,
            {
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
            },
            { withCredentials: true },
        );

        const data = await res.data;

        if (res.status === 201) {
            dispatch(push('/result/success'));
        }

        return data;
    } catch (error: any) {
        if (error.response.status === 409) {
            dispatch(push('/result/error-user-exist'));
            return rejectWithValue(409);
        }

        if (error.response.status) {
            dispatch(push('/result/error'));
            return rejectWithValue(error.response.status);
        }
    }
});

const initialState: RegistrationStateType = {
    isLoadingRegistration: false,
    data: {
        email: '',
        password: '',
        confirmPassword: '',
    },
    error: null,
    status: false,
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        clearRegState: (state) => {
            state.status = false;
            state.error = null;
        },
        addFormDataReg: (state, { payload }) => {
            state.data.email = payload.email;
            state.data.password = payload.password;
            state.data.confirmPassword = payload.confirmPassword;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registrationFetch.pending, (state) => {
                state.isLoadingRegistration = true;
                state.error = null;
                state.status = false;
            })
            .addCase(registrationFetch.fulfilled, (state) => {
                state.isLoadingRegistration = false;
                state.error = null;
                state.status = true;
            })
            .addCase(registrationFetch.rejected, (state, { payload }) => {
                state.isLoadingRegistration = false;
                state.status = false;
                if (payload) {
                    state.error = payload;
                }
            });
    },
});

export const { clearRegState, addFormDataReg } = registrationSlice.actions;

export default registrationSlice.reducer;
