import * as catalogActions from "../../types/catalog/onlineCatalogActionTypes";

const initialState = {
  products: {} as any,
  isFetching: false,
  isPromoProducts: false,
  isActiveProducts: false,
};

 const onlineCatalogReducer = (state = initialState, action) => {


  switch (action.type) {
    case catalogActions.SAVE_CATALOG: {
      return {
        ...state,
        products: action.payload,
        isFetching: false
      };
    }
    case catalogActions.IS_ACTIVE: {
      return {
        ...state,
        isActiveProducts: action.payload,
        isFetching: false
      };
    }
    case catalogActions.IS_PROMO: {
      return {
        ...state,
        isPromoProducts: action.payload,
        isFetching: false
      };
    }
    case catalogActions.IS_FETCHING: {
      return {
        ...state,
        isFetching: true
      };
    }
    default:
      return state;
  }
}

export default onlineCatalogReducer