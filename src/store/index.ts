import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from './slices/app-slice'
import { uiSlice } from './slices/ui-slice'

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    app: appSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
