import './footer.css';

function Footer() {
    return (
        <div>
            <div class="footer">
                <div class="logoandcopyright">
                    <div class="logoflipcartfooter">
                        <img src={require('./FKlogo.png')}></img>
                    </div>
                    <div class="legal">
                        Legal
                    </div>
                    <div class="media">
                        Media
                    </div>
                    <div class="careers">
                        Careers
                    </div>
                    <div class="fkgrp">
                        Flipcart group
                    </div>
                    <div class="fkfiundation">
                        Flipkart Foundation
                    </div>
                </div>
                <div class="aboutcopyright">
                    © 2022 www.flipkart.com. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
