import './technology.css';

function Technology() {
    return (
        <div>
            <div class="imgandtexttechnology">
                <div class="technologyimg">
                    <img src={require('./technologyimage.png')}></img>
                </div>
                <div class="technologyfourdiv">
                    <div class="technologymain">
                        TECHNOLOGY AT FLIPKART
                    </div>
                    <div class="technologysecond">
                        INNOVATION
                    </div>
                    <div class="technologythird">
                        Flipkart technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.
                    </div>
                    <div class="technologybutton">
                        READ MORE
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;
