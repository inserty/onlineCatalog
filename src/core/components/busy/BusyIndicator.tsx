import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";

interface BusyIndicatorProps {
    loading:boolean
}

const useStyles = makeStyles((theme) => ({
    loader: {
      border: '4px solid #E0E2EA',
      borderTop: '4px solid #4460F7',
      borderRadius: '50%',
      width: 56,
      height: 56,
      animation: 'spin 2s linear infinite'
    },
    root:{
        zIndex: 9999999999
    }
  }));

const BusyIndicator: React.FunctionComponent<BusyIndicatorProps> = (props) => {
    const {children, loading} = props
    const classes = useStyles()
    return (
        <>
            {loading ? 
                <div className={`${classes.root} flex justify-center items-center absolute w-screen h-screen`}>
                    <div className={classes.loader}></div>
                </div>
                : children
            }
        </>
    );

}

export default BusyIndicator