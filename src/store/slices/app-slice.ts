import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
  },
})

export const { setCategories } = appSlice.actions
