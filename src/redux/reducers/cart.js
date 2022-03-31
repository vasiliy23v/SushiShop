const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SUSHI_CART": {
      const obj = {}

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: !state.items[action.payload.id]
            ? [action.playload]
            : [...state.items[action.payload.id], action.payload],
        },
      };
    }
    default:
      return state;
  }
};

export default cart;