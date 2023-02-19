import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface BaskeState{
  basketShop: {name: string, quantity: number}[]
}
export const initialState: BaskeState = {
  basketShop: [],
}

export const slice = createSlice({
  name: "basket",
  initialState,
  reducers: {
addBook: (state, action: PayloadAction<{name: string, quantity: number}>) => {
state.basketShop.push(action.payload);
},
removeBook: (state, action: PayloadAction<{name: string, quantity: number}>) =>{
  state.basketShop = state.basketShop.filter(x => x.name !== action.payload.name )
}
  },

})


export const { addBook, removeBook } = slice.actions

export default slice.reducer

// export interface DataArrayState{
//     dataArray: string[]
//   }
//   export const initialState: DataArrayState = {
//     dataArray: [],
//   }
  
//   export const slice = createSlice({
//     name: "slice",
//     initialState,
//     reducers: {
//   addTodo: (state, action: PayloadAction<string>) => {
//   state.dataArray.push(action.payload);
//   }
//     },
  
//   })


// export const { addTodo } = slice.actions

// export default slice.reducer