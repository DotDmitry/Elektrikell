
import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_BUTTON } from "../Head/constans";
import { getDefaultFrom, getDefaultUntil } from "../utils/dates"

const initialState = {
    activePrice: DEFAULT_ACTIVE_BUTTON,
    activeInterval: 1,
};

const initialDates = {
    filterFrom: getDefaultFrom(),
    filterUntil: getDefaultUntil(),
};


export const setActivePrice = createAction("setActivePrice");
export const setActiveInterval = createAction("setActiveInterval");

const main = createReducer(initialState, (builder) => {
    builder.addCase(setActivePrice, (state, action) => {
        state.activePrice = action.payload;
    }).addCase(setActiveInterval, (state, action) => {
        state.activeInterval = action.payload;
    });
});

const dateSlice = createSlice({
    name: 'dates',
    initialState: initialDates,
    reducers: {
        setfilterFrom: (state, action) => {
            state.filterFrom = action.payload;
        },
        setfilterUntil: (state, action) => {
            state.filterUntil = action.payload;
        },
    }
});

export const { setfilterFrom, setfilterUntil } = dateSlice.actions;

export const store = configureStore({
    reducer: { main, dates: dateSlice.reducer },
});
