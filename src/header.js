import './header.css';
function Header() {
    return (
        <div>
            <div class="navbar">
                <div class="logoflipcart">
                    <img src={require('./images.png')}></img>
                </div>
                <div class="searchbar">
                    <input type="text" placeholder='search for products,brands and more'></input>
                </div>
                <div class="userlogin">
                    <div class="user"><i class="fa-solid fa-user"></i></div>
                    <div class="login">Login</div>
                </div>
                <div class="cartshopping">
                    <div class="cart"><i class="fa-solid fa-cart-shopping"></i></div>
                    <div class="cartt">cart</div>
                </div>
                <div class="becomeseller">
                    <div class="house"><i class="fa-solid fa-house-user"></i></div>
                    <div class="seller">Become a Seller</div>
                </div>
                <div class="dot"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
        </div>
    );
}
export default Header;