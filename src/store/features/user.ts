import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from 'store'
import { StoreSlices } from 'store/types'

export type UserState = {
  user?: unknown
}

const initialState: UserState = {
  user: undefined
}

export const userSlice = createSlice({
  name: StoreSlices.USER,
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<unknown>) => {
      state.user = action.payload
    }
  }
})

export const { saveUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer
