
import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_BUTTON } from "../Head/constans";
import { getDefaultFrom, getDefaultUntil } from "../utils/dates"

const initialState = {
    activePrice: DEFAULT_ACTIVE_BUTTON,
    activeInterval: 1,
    errorMessage: null,
};

export const setActivePrice = createAction("setActivePrice");
export const setActiveInterval = createAction("setActiveInterval");
export const setErrorMessage = createAction("setErrorMessage");

const main = createReducer(initialState, (builder) => {
    builder.addCase(setActivePrice, (state, action) => {
        state.activePrice = action.payload;
    }).addCase(setActiveInterval, (state, action) => {
        state.activeInterval = action.payload;
    }).addCase(setErrorMessage, (state, action) => {
        state.errorMessage = action.payload;
    });
});

const initialDates = {
    filterFrom: getDefaultFrom(),
    filterUntil: getDefaultUntil(),
};

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

////////

const initialBody = {
    averagePrice: 0,
    filterUntil: getDefaultUntil(),
    showFilters: false,
    countdownDataContext: null,
    isLoading: true,
};

const bodySlice = createSlice({
    name: 'body',
    initialState: initialBody,
    reducers: {
        setAveragePrice: (state, action) => {
            state.averagePrice = action.payload;
        },
        handleCloseSideBar: (state, action) => {
            state.showFilters = false;
        },
        handleShowSideBar: (state, action) => {
            state.showFilters = true;
        },
        setCountdownDataContext: (state, action) => {
            state.countdownDataContext = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    }
});

export const { setAveragePrice, handleCloseSideBar, handleShowSideBar, setCountdownDataContext, setIsLoading } = bodySlice.actions;

export const store = configureStore({
    reducer: { main, dates: dateSlice.reducer, body: bodySlice.reducer },
});
