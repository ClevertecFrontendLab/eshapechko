import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API, CHANGE_PASSWORD } from '../../../api';
import { push } from 'redux-first-history';
import { ChangePasswordType } from '../../../types/changePasswordStateType';
import { AccountRestore } from '../../../types/formType';

export const changePasswordFetch = createAsyncThunk<
    ChangePasswordType,
    AccountRestore,
    { rejectValue: string }
>('changePassword/changePasswordlFetch', async (formData, { dispatch, rejectWithValue }) => {
    try {
        const res = await axios.post(
            `${URL_API}${CHANGE_PASSWORD}`,
            {
                password: formData.password,
                confirmPassword: formData.confirmPassword,
            },
            { withCredentials: true },
        );

        const data = await res.data;

        if (res.status === 201) {
            dispatch(push('/result/success-change-password'));
        }

        return data;
    } catch (error: any) {
        if (error.response) {
            dispatch(push('/result/error-change-password'));
            return rejectWithValue(error.response.status);
        }
    }
});

const initialState: ChangePasswordType = {
    isLoadingChangePassword: false,
    password: '',
    confirmPassword: '',
    errorChangePassword: null,
    privateChangeSuccess: false,
};

export const changePasswordSlice = createSlice({
    name: 'changePassword',
    initialState,
    reducers: {
        setChangePassword(state, { payload }) {
            state.password = payload.password;
            state.confirmPassword = payload.confirmPassword;
        },
        clearChangePassword(state) {
            state.password = '';
            state.confirmPassword = '';
            state.errorChangePassword = null;
            state.privateChangeSuccess = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(changePasswordFetch.pending, (state) => {
                state.isLoadingChangePassword = true;
                state.errorChangePassword = null;
            })
            .addCase(changePasswordFetch.fulfilled, (state) => {
                state.isLoadingChangePassword = false;
                state.errorChangePassword = null;
                state.privateChangeSuccess = true;
            })
            .addCase(changePasswordFetch.rejected, (state, { payload }) => {
                state.isLoadingChangePassword = false;
                state.errorChangePassword = '' + payload;
                state.privateChangeSuccess = false;
            });
    },
});

export const { setChangePassword, clearChangePassword } = changePasswordSlice.actions;

export default changePasswordSlice.reducer;
