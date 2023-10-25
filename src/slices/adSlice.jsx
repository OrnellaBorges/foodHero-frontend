import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ads: [],
};

export const adsSlice = createSlice({
    name: "Ads",
    initialState,
    reducers: {
        loadAd: (state, action) => {
            state.ads = action.payload;
        },
    },
});

export const { loadAd } = adSlice.actions;
export const selectAds = (state) => state.ads;
export default adsSlice.reducer;
