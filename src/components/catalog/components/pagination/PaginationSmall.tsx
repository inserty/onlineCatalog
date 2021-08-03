import { makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from 'clsx';
import productsAPI from "../../services/ProductsAPI";
import { isFetching, saveCatalog } from "../../../../core/shared/store/actions/catalog/onlineCatalog.actions";

const useStyles = makeStyles((theme) => ({
    activePage: {
        color: `#4460F7`
    },
  }));

const PaginationSmall: FunctionComponent<any> = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const metaData = useSelector<any, any>(state => state?.OnlineCatalog?.products?.meta);
    const isActiveProducts = useSelector<any, any>(state => state?.OnlineCatalog?.isActiveProducts);
    const isPromoProducts = useSelector<any, any>(state => state?.OnlineCatalog?.isPromoProducts);
    const productQuery = useSelector<any, string>(state => state?.OnlineCatalog?.productQuery);

    const currentPage = metaData?.currentPage
    const totalPages = metaData?.totalPages

    const onPageClick = (pageNumber: any) => {
        productsAPI.getProductsByPage(pageNumber, isActiveProducts, isPromoProducts, productQuery).then(data => dispatch(saveCatalog(data)))
    }

    const renderPageRange = React.useMemo(() => {
        let pages:any = []

        if(currentPage) {
            for(let i=1; i <= totalPages; i++) {
                pages.push(
                    <li key={i} onClick={() => {onPageClick(i)}} className={clsx(currentPage === i && classes.activePage, 'text-14')}>{i}</li>
                )
            }
        }

        return pages
    }, [currentPage, totalPages])

    return (
        totalPages <= 6 ?
        <div className={`flex items-center justify-center m-4`}>
            <ul className={`inline-flex space-x-4`}>
                {renderPageRange}
            </ul>
        </div>
        : 
        null
    );

}

export default PaginationSmall