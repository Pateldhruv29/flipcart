import './header.css';

function Header() {
    return (
        <div>
            <div class="navbar">
                <div class="aboutlogoflipcart">
                    <img src={require('./logo.jpg')}></img>
                </div>
                <div class="otherdiv">
                    <div class="about">
                        About
                    </div>
                    <div class="ethics">
                        Ethics
                    </div>
                    <div class="culture">
                        Culture
                    </div>
                    <div class="technology">
                        Technology
                    </div>
                    <div class="sustainability">
                        sustainability
                    </div>
                    <div class="stories">
                        Stories
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
