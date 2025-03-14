import './header.css';

function Header() {
    return (
        <div>
            <div class="headermain">
                <div class="logoandhelp">
                    <div class="logoandplusbutton">
                        <div class="logo">
                            <img src={require('./logofk.png')}></img>
                        </div>
                        <div class="exploreandplus">
                            <div class="explore">
                                Explore
                            </div>
                            <div class="plus">
                                Plus
                            </div>
                            <div class="pluslogo">
                                <img src={require('./plusimg.png')}></img>
                            </div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="helpcenter">
                        Help Center
                    </div>
                </div>
                <div class="otherfourdiv">
                    <div class="login">
                        login
                    </div>
                    <div class="seller">
                        become a seller
                    </div>
                    <div class="more">
                        more
                    </div>
                    <div class="cart">
                        <div class="cartsymbol">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div class="cartname">
                            cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
