import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import PaginationSmall from "./PaginationSmall";

const Paginations: FunctionComponent<any> = () => {
    const totalPages = useSelector<any, any>(state => state?.OnlineCatalog?.products?.meta?.totalPages);
    return (
        <>
            {totalPages > 6 ? <Pagination /> :  <PaginationSmall />}
        </>
    );

}

export default Paginations