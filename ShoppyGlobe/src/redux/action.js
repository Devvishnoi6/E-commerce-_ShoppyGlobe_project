


export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

//Action for adding product to cart
export const addToCart = (product) => ({
  //Shows the action type
  type: ADD_TO_CART,
  //Data to be added to cart
  payload: product,
});

//Action for removing product to cart
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

//Action for incrementing the quantity of product in cart
export const incrementQuantity = (id) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});

//Action for decrementing the quantity of product in cart
export const decrementQuantity = (id) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});