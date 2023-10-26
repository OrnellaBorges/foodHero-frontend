import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ads: [],
};

export const adSlice = createSlice({
    name: "ads",
    initialState,
    reducers: {
        loadAds: (state, action) => {
            state.ads = action.payload;
        },
        updateAd: (state, action) => {
            console.log("action.payload", action.payload);
            //state.ads = action.payload;
        },
    },
});

export const { loadAds } = adSlice.actions;
export const selectAds = (state) => state.ads;
export default adSlice.reducer;
