import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type tState = {
  address: string;
};

const initialState: tState = {
  address: '',
};

export const account = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setAccount } = account.actions;

export default account.reducer;
