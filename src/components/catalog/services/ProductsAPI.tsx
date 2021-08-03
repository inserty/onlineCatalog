import store from '../../../core/shared/store/store'
import { isFetching } from '../../../core/shared/store/actions/catalog/onlineCatalog.actions'
import ObjectState from '../../../core/utils/state/ObjectState'

const fetchRelation: string = "products"
const persistRelation: string = "products"

const options = {
    fetchRelation: fetchRelation,
    persistRelation: persistRelation
}

const productPerPageLimit = 8

class ProductsAPI extends ObjectState{

    constructor(options:{fetchRelation: string, persistRelation: string}){
        super(options);
    }
    

    public getProducts = () => {
        store.dispatch(isFetching())
        return this.fetch({ params: { limit: productPerPageLimit } })
    }

    public getProductsByPage = (pageNumber:number, active: boolean, promo: boolean, productQuery: string) => {
        store.dispatch(isFetching())
        return this.fetch({ params: { limit: productPerPageLimit, page: pageNumber, active: active || null, promo: promo || null, search: productQuery || null } })
    }

    public getFilteredProducts = (active: boolean, promo: boolean, productQuery: string) => {
        store.dispatch(isFetching())
        return this.fetch({ params: { limit: productPerPageLimit, active: active || null, promo: promo || null, search: productQuery || null } })
    }

    public getProductsBySearch = (productQuery:string, active: boolean, promo: boolean) => {
        store.dispatch(isFetching())
        return this.fetch({ params: { limit: productPerPageLimit, search: productQuery || null, active: active || null, promo: promo || null } })
    }
}

const productsAPI = new ProductsAPI(options)

export default productsAPI