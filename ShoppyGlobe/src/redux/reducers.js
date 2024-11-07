

import { ADD_TO_CART , REMOVE_FROM_CART , INCREMENT_QUANTITY , DECREMENT_QUANTITY} from "./action";

const initialState = {
  cart: []
};

//Root reducer to handle diff cart actions
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action for adding a product to the cart
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

      // Action for removing a product to the cart
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case INCREMENT_QUANTITY:
          // Find the product by its ID
        return{...state, cart: state.cart.map(item =>
           item.id === action.payload
           ? {...item , quantity: item.quantity + 1} 
           // Returns the item as it is if the ID does not match
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

