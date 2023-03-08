import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { convertNftItem } from 'src/helpers/api/convertNftItem';
import { getOwnedNft } from 'src/services/api/nft/getOwnedNft';
import { tNftItem } from 'src/types/tNftItem';

type tState = {
  ownedNfts: tNftItem[];
};

const initialState: tState = {
  ownedNfts: [],
};

export const getOwnedNftList = createAsyncThunk(
  'getNftList',
  async (address: string) => {
    const nfts = await getOwnedNft(address);
    return nfts;
  }
);

export const nft = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    setNftList: (state, action: PayloadAction<tNftItem[]>) => {
      state.ownedNfts = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOwnedNftList.fulfilled, (state, action) => {
      if (action.payload) {
        state.ownedNfts = action.payload.map((e) => convertNftItem(e));
      }
    });
  },
});

export const { setNftList } = nft.actions;

export default nft.reducer;
