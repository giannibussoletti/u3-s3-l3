const initialState = {
  main: {
    favorites: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        main: {
          ...state.main,
          favorites: [...state.main.favorites, action.payload],
        },
      }
    default:
      return state
  }
}

export default mainReducer
