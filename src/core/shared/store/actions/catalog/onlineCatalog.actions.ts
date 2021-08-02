import * as catalogActions from "../../types/catalog/onlineCatalogActionTypes";

export const isActiveProducts = (data) => ({
    type: catalogActions.IS_ACTIVE,
    payload: data
});

export const isPromoProducts = (data) => ({
    type: catalogActions.IS_PROMO,
    payload: data
});

export const saveCatalog = (data) => ({
    type: catalogActions.SAVE_CATALOG,
    payload: data
});

export const isFetching = () => ({
    type: catalogActions.IS_FETCHING
})