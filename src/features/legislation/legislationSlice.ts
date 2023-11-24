import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LegislationResult, LegislationType } from 'src/types/legislation';
import { QueryPayload } from 'src/types/http';
import { urlBuilder } from '@hooks/useUrlBuilder';
import { PROJECT_API, RESOURCES } from '@http/constants/constants';
import axios from 'axios';
import { queryRecordData } from '@mocks/queryRecordData';

interface LegislationState {
  legislation: LegislationResult[];
  favorites: string[];
  queryRecord: QueryPayload;
  hasError: boolean;
  isLoading: boolean;
}

const initialState: LegislationState = {
  legislation: [] as LegislationResult[],
  favorites: [],
  queryRecord: queryRecordData,
  hasError: false,
  isLoading: false,
};

const legislationSlice = createSlice({
  name: 'legislation',
  initialState,
  reducers: {
    setLegislation: (state, action: PayloadAction<LegislationResult[]>) => {
      state.legislation = action.payload;
    },
    setFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = [...state.favorites, action.payload];
      console.log('the request to favorite a bill was dispatched to the server.');
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((item) => item !== action.payload);
      console.log('the request to unfavorite a bill was dispatched to the server.');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLegislation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLegislation.fulfilled, (state, action: PayloadAction<LegislationResult[]>) => {
        state.legislation = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchLegislation.rejected, (state) => {
        state.legislation = [];
        state.isLoading = false;
      });
  },
});

export const fetchLegislation = createAsyncThunk('legislation/fetchLegislation', async (query: QueryPayload) => {
  const url = urlBuilder(`${PROJECT_API.DATA_SOURCE}${RESOURCES.LEGISLATION}`, query);
  const res = await axios.get(url);
  const data: LegislationType = res.data;
  return data.results as LegislationResult[];
});

export const { setLegislation, setFavorites, removeFavorite } = legislationSlice.actions;

export default legislationSlice.reducer;
