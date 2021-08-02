import React from "react";
import { CircularProgress } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";

interface BusyIndicatorProps {
    loading:boolean
}

const BusyIndicator: React.FunctionComponent<BusyIndicatorProps> = (props) => {
    const {children, loading} = props
    console.log(loading)
    return (
        <>
            {loading && 
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          }
            {loading && <LinearProgress />}
            {children}
        </>
    );

}

export default BusyIndicator