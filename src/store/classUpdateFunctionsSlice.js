import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const classUpdateFunctionSlice = createSlice({
    name:'classUpdateFunctions',
    initialState,
    reducers: {
        storeFuction(state, action) {
            const funcName = action.payload.funcName
            state[funcName] = action.payload.func
            console.log(funcName)
        },
    }
})

export default classUpdateFunctionSlice

