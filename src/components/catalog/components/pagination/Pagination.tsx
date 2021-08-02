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
    inactivePage: {
        color: `#9194A5`
    }
  }));

const Pagination: FunctionComponent<any> = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const metaData = useSelector<any, any>(state => state?.OnlineCatalog?.products?.meta);
    const isActiveProducts = useSelector<any, any>(state => state?.OnlineCatalog?.isActiveProducts);
    const isPromoProducts = useSelector<any, any>(state => state?.OnlineCatalog?.isPromoProducts);

    const currentPage = metaData?.currentPage
    const totalPages = metaData?.totalPages

    const onPageClick = (pageNumber: any) => {
        if(pageNumber) {
            productsAPI.getProductsByPage(pageNumber, isActiveProducts, isPromoProducts).then(data => dispatch(saveCatalog(data)))
        }
    }

    const renderPageRange = React.useMemo(() => {
        let pages:any = []


        if(currentPage && totalPages) {
            pages.push(
                <li key={'firstPage'} onClick={() => onPageClick(currentPage === 1 ? null : 1)} className={clsx(currentPage === 1 && classes.inactivePage)}>First</li>
            )

            if(currentPage === 1 || currentPage === 2) {
                for(let i=1; i <= 3; i++) {
                    pages.push(
                        <li key={i} onClick={() => {onPageClick(i)}} className={clsx(currentPage === i && classes.activePage)}>{i}</li>
                    )
                }
            } else if(totalPages - currentPage > 2){
                pages.push(
                    <li key={currentPage - 1} onClick={() => {onPageClick(currentPage - 1)}}>{currentPage - 1}</li>
                )
                pages.push(
                    <li key={currentPage} onClick={() => {onPageClick(currentPage - 1)}} className={classes.activePage}>{currentPage}</li>
                )
                totalPages - currentPage !== 3 && pages.push(
                    <li key={currentPage + 1} onClick={() => {onPageClick(currentPage + 1)}}>{currentPage + 1}</li>
                )
            }

            if(totalPages - currentPage > 2 && totalPages - currentPage !== 3){
                pages.push(
                    <li key={'threeDot'} className={'text-14'}>...</li>
                )
            }

            if(totalPages - currentPage === 2) 
            {
                pages.push(
                    <li key={totalPages-3} onClick={() => {onPageClick(totalPages - 3)}} className={clsx(currentPage === totalPages-3 && classes.activePage)}>{totalPages - 3}</li>
                )
            }

            pages.push(
                <li key={totalPages-2} onClick={() => {onPageClick(totalPages - 2)}} className={clsx(currentPage === totalPages-2 && classes.activePage)}>{totalPages - 2}</li>
            )
            pages.push(
                <li key={totalPages-1} onClick={() => {onPageClick(totalPages - 1)}} className={clsx(currentPage === totalPages-1 && classes.activePage)}>{totalPages - 1}</li>
            )
            pages.push(
                <li key={totalPages} onClick={() => {onPageClick(totalPages)}} className={clsx(currentPage === totalPages && classes.activePage)}>{totalPages}</li>
            )
            pages.push(
                <li key={'lastPage'} onClick={() => {onPageClick(currentPage === totalPages ? null : totalPages)}} className={clsx(currentPage === totalPages && classes.inactivePage)}>Last</li>
            )
        }

        return pages
    }, [currentPage, totalPages])

    return (
        <div className={`flex items-center justify-center m-4`}>
            <ul className={`inline-flex space-x-4`}>
                {renderPageRange}
            </ul>
        </div>
    );

}

export default Pagination