//handle functionality of carts increase and decrease no of products in cart 
//method accepts current state of cart and action item and updates state in immutable manner 
// This method is a cart reducer
export const cartReducer = (state = { cartProducts: [] }, action) => {    
  switch (action.type) {
    case "ADD_TO_CART": // add item to cart
      const alreadyExists = state.cartProducts.find(
        (product) => product._id === action.payload._id
      );
      if (alreadyExists) {
        return {
          ...state,
          cartProducts: state.cartProducts.map((product) =>
            product._id === action.payload._id ? action.payload : product
          ),
        };
      } else {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.payload],
        };
      }

    case "DELETE_FROM_CART": // delete items from cart
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
