export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      ); // cari index dalam state. findIndex method ni argument dia arrow function yang nak cari target index
      let newBasket = [...state.basket]; // declare variable baru "newBasket" yang duplicate state terkini dalam basket
      if ((index) => 0) {
        // kalau position index lebih dari 1 dia akan run remove basket function
        newBasket.splice(index, 1); // splice akan ambik argument 'index' yang kita baru decalre kat atas dan bunang '1' element dalam array
      }
      return {
        ...state, // current state in redux utk kita tukar basket lama ke newBasket
        basket: newBasket,
      };

    default:
      return state;
  }
};
export default reducer;
