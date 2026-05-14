import ProductCard from "../products/ProductCard";
import wishIco from "../../images/control/heart_fill.svg";

function WishList() {
    return (
        <div className="profile__wishlist">
            <div className="profile__wishlist-head">
                <div className="profile__wishlist-title">
                    <img src={wishIco} alt="" />
                    <span>Избранное</span>
                </div>
                <div className="profile__wishlist-button">
                    Показать всё
                </div>
            </div>
            <div className="profile__wishlist-grid">
                {/* <ProductCard product={{}} brandMap={{}}/> */}
                
            </div>
        </div>
    );
}

export default WishList;