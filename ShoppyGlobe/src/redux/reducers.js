

import { ADD_TO_CART , REMOVE_FROM_CART , INCREMENT_QUANTITY , DECREMENT_QUANTITY} from "./action";

const initialState = {
  cart: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case INCREMENT_QUANTITY:
        return{...state, cart: state.cart.map(item =>
           item.id === action.payload
           ? {...item , quantity: item.quantity + 1} 
           : item),
          };

    case DECREMENT_QUANTITY:
            return{...state , cart: state.cart.map(item =>
               item.id === action.payload && item.quantity > 1 
               ? {...item , quantity: item.quantity - 1} 
               : item),
          };
    default:
      return state;
  }
};

export default rootReducer;

