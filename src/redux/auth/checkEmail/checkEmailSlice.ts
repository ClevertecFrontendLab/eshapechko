import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API, CHECK_EMAIL, CONFIRM_EMAIL } from '../../../api';
import { push } from 'redux-first-history';
import { CheckEmailType } from '../../../types/checkEmailType';

export const checkEmailFetch = createAsyncThunk<string, string, { rejectValue: string }>(
    'checkEmail/checkEmailFetch',
    async (email, { dispatch, rejectWithValue }) => {
        try {
            const res = await axios.post(
                `${URL_API}${CHECK_EMAIL}`,
                {
                    email: email,
                },
                { withCredentials: true },
            );

            const data = await res.data.email;

            if (res.status === 200) {
                dispatch(push('/auth/confirm-email'));
            }

            return data;
        } catch (error: any) {
            if (
                error.response.data.message === 'Email не найден' &&
                error.response.data.statusCode === 404
            ) {
                dispatch(push('/result/error-check-email-no-exist'));
                return rejectWithValue(error.response.data.stausCode);
            }

            if (error.response && error.response.data.message !== 'Email не найден') {
                dispatch(push('/result/error-check-email'));
                return rejectWithValue(error.response.status);
            }
        }
    },
);

export const confirmEmailFetch = createAsyncThunk<
    string,
    string,
    { state: { checkEmail: { email: string } }; rejectValue: string }
>('checkEmail/confirmEmailFetch', async (code, { dispatch, getState, rejectWithValue }) => {
    const email = getState().checkEmail.email;
    try {
        const res = await axios.post(
            `${URL_API}${CONFIRM_EMAIL}`,
            {
                email: email,
                code: code,
            },
            { withCredentials: true },
        );

        const data = await res.data.message;

        if (res.status === 200) {
            dispatch(push('/auth/change-password'));
        }

        return data;
    } catch (error: any) {
        return rejectWithValue(error.response.status);
    }
});

const initialState: CheckEmailType = {
    isLoadingCheckEmail: false,
    email: '',
    errorCheck: null,
    errorConfirm: null,
    isLoadingConfirmEmail: false,
    code: '',
    privateConfirm: false,
    privateChange: false,
};

export const checkEmailSlice = createSlice({
    name: 'checkEmail',
    initialState,
    reducers: {
        setEmail(state, { payload }) {
            state.email = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkEmailFetch.pending, (state) => {
                state.isLoadingCheckEmail = true;
                state.errorCheck = null;
            })
            .addCase(checkEmailFetch.fulfilled, (state, { payload }) => {
                state.isLoadingCheckEmail = false;
                state.email = payload;
                state.errorCheck = null;
                state.privateConfirm = true;
            })
            .addCase(checkEmailFetch.rejected, (state, { payload }) => {
                state.isLoadingCheckEmail = false;

                state.errorCheck = '' + payload;
            })

            .addCase(confirmEmailFetch.pending, (state) => {
                state.isLoadingConfirmEmail = true;
                state.errorConfirm = null;
            })
            .addCase(confirmEmailFetch.fulfilled, (state, { payload }) => {
                state.isLoadingConfirmEmail = false;
                state.code = payload;
                state.errorConfirm = null;
                state.privateConfirm = false;
                state.privateChange = true;
            })
            .addCase(confirmEmailFetch.rejected, (state, { payload }) => {
                state.isLoadingConfirmEmail = false;
                if (payload) {
                    state.errorConfirm = '' + payload;
                }
            });
    },
});

export const { setEmail } = checkEmailSlice.actions;

export default checkEmailSlice.reducer;
