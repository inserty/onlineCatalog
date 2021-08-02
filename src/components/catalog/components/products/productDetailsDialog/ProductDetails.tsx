import React, { FunctionComponent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useTheme } from '@material-ui/core/styles';
import { saveSelectedProduct } from '../../../../../core/shared/store/actions/catalog/onlineCatalog.actions';
import { useDispatch, useSelector } from 'react-redux';
import ProductDescription from '../ProductDescription';
import ProductTitle from '../ProductTitle';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

interface ProductDetailsProps {
}

const ProductDetails: FunctionComponent<ProductDetailsProps> = (props) => {
  const dispatch = useDispatch()
  const selectedProduct = useSelector<any, any>(state => state?.OnlineCatalog?.selectedProduct);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => {
    selectedProduct && setOpen(true)
  }, [selectedProduct])

  const handleClose = () => {
    dispatch(saveSelectedProduct(null))
    setOpen(false);
  };

  return (
    <Dialog
      scroll={'body'}
      className={'h-full'}
      open={open}
      onClose={handleClose}
      aria-labelledby="productDialogTitle"
    >
      <div className={`flex w-full justify-end absolute`}>
        <IconButton onClick={() => handleClose()} color="primary" component="span">
            <CloseIcon className={`text-black`} />
        </IconButton>
      </div>
      <img src={selectedProduct?.image} alt={selectedProduct?.name} />
      <div className={`m-4`}>
        <ProductTitle title={selectedProduct?.name}/>
        <ProductDescription description={selectedProduct?.description}/>
      </div>
    </Dialog>
  )
}

export default ProductDetails