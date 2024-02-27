import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API, AUTH_LOGIN } from '../../../api';
import { FormTypeLogin } from '../../../types/formType';
import { push } from 'redux-first-history';
import { LoginStateType } from '../../../types/loginStateType';

export const loginFetch = createAsyncThunk<string, FormTypeLogin, { rejectValue: number }>(
    'login/loginFetch',
    async (formData, { dispatch, rejectWithValue }) => {
        try {
            const res = await axios.post(
                `${URL_API}${AUTH_LOGIN}`,
                {
                    email: formData.email,
                    password: formData.password,
                },
                { withCredentials: true },
            );

            const data = await res.data.accessToken;
            console.log('data: ', data);

            if (res.status === 200) {
                dispatch(push('/main'));
            }

            if (formData.remember) {
                localStorage.setItem('token', JSON.stringify(data));
            }

            return data;
        } catch (error: any) {
            if (error.response.status) {
                dispatch(push('/result/error-login'));
                return rejectWithValue(error.response.status);
            }
        }
    },
);

const initialState: LoginStateType = {
    isLoadingLogin: false,
    token: localStorage.getItem('token'),
    error: null,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        removeToken(state) {
            state.token = null;
            localStorage.removeItem('token');
        },

        clearLoginError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginFetch.pending, (state) => {
                state.isLoadingLogin = true;
                state.error = null;
            })
            .addCase(loginFetch.fulfilled, (state, { payload }) => {
                state.isLoadingLogin = false;
                state.token = payload;
                state.error = null;
            })
            .addCase(loginFetch.rejected, (state, { payload }) => {
                state.isLoadingLogin = false;

                if (payload) {
                    state.error = payload;
                }
            });
    },
});

export const { removeToken, clearLoginError } = loginSlice.actions;

export default loginSlice.reducer;
