import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "../utils/initialState";

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setWeatherData: (state, action: PayloadAction<any>) => {
            state.weatherData = action.payload;
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        }
    },
})

export const { setWeatherData, setLocation } = weatherSlice.actions;

export default weatherSlice.reducer