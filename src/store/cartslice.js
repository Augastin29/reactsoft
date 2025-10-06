import{createSlice}from'@reduxjs/toolkit';
const cartSlice=createSlice({
    name:'cart',
    initialstate:[],
    reducers:{
        additem(state,action){

        },
        removeitem(state,action){

        }
    }
})
export default cartSlice.reducer
let {additem,removeitem}=cartSlice.actions