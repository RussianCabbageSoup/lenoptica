import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../index";
import ControlNewProduct from "./ControlNewProduct";
import ControlEditProduct from "./ControlEditProduct";
import { TABLE_TYPES } from "../../../const/TableTypes";

const ControlProduct = observer(() => {

    const { product } = useContext(Context);

    if (product.selectedTable === TABLE_TYPES.PRODUCTS) {
        return (
            <div className="admin__control">
                <ControlNewProduct />
                <ControlEditProduct />
            </div>
        )
    }

    return null;
})

export default ControlProduct;