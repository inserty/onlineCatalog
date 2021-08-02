import { withStyles } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { CheckboxProps } from "@material-ui/core";

const ProductCheckBox = withStyles({
    root: {
      color: `#E0E2EA`,
      '&$checked': {
        color: `#4460F7`,
      }
    },
    checked: {},
})((props:CheckboxProps) => <Checkbox color="default" {...props} />);

export default ProductCheckBox