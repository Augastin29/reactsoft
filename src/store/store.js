import {configureStore} from "@reduxjs/toolkit"
import {cartSliceReducer} from './cartslice'


export const store= configureSrore({
    reducer:{
        cart :cartSliceReducer
    }
})