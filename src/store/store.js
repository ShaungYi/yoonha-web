import {configureStore } from '@reduxjs/toolkit'
import classUpdateFunctionsSlice from './classUpdateFunctionsSlice'




let store = configureStore({
    reducer: {
        classUpdateFunctions: classUpdateFunctionsSlice.reducer
    } 
})


export const classUpdateFunctionsSliceActions = classUpdateFunctionsSlice.actions
export default store