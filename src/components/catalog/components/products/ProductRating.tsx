import React, { FunctionComponent } from "react";

import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Star from "./ratingStars/Star";
import EmptyStar from "./ratingStars/EmptyStar";

const useStyles = makeStyles((theme) => ({

  }));
  

interface ProductRatingProps {
    rating: any
}

const ProductRating: FunctionComponent<ProductRatingProps> = (props) => {
    const { rating } = props

    return (
        <div className={'mt-2 mb-2'}>
            {rating === 5 && <> <Star/> <Star/> <Star/> <Star/> <Star/> </>}
            {rating === 4 && <> <Star/> <Star/> <Star/> <Star/> <EmptyStar/> </>}
            {rating === 3 && <> <Star/> <Star/> <Star/> <EmptyStar/> <EmptyStar/> </>}
            {rating === 2 && <> <Star/> <Star/> <EmptyStar/> <EmptyStar/> <EmptyStar/> </>}
            {rating === 1 && <> <Star/> <EmptyStar/> <EmptyStar/> <EmptyStar/> <EmptyStar/> </>}
            {rating === 0 && <> <EmptyStar/> <EmptyStar/> <EmptyStar/> <EmptyStar/> <EmptyStar/> </>}
        </div>
    );

}

export default ProductRating