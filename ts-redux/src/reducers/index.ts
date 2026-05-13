import type { PayloadAction } from "@reduxjs/toolkit"
import type { IBook, ReduxStore } from "../interfaces/types"

const initialState: ReduxStore = {
  cart: {
    content: [],
  },
}

const mainReducer = (state = initialState, action: PayloadAction<IBook>) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: [...state.cart.content, action.payload],
        },
      }

    default:
      return state
  }
}

export default mainReducer
