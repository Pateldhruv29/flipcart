import './culture.css';

function Culture() {
    return (
        <div>
            <div class="culturemain">
                <div class="firstimgculture">
                    <img src={require('./culturefirstphoto.png')}></img>
                </div>
                <div class="textandculturesecondimg">
                    <div class="culturethreediv">
                        <div class="culturemainname">
                            Flipkart Culture
                        </div>
                        <div class="culturesentance">
                            Flipkart culture is steeped in fostering trust, inclusion, support, recognition and genuine care that enables Flipsters to create, innovate, and bring their best selves to work
                        </div>
                        <div class="culturebooton">
                            EXPLORE OUR CULTURE
                        </div>
                    </div>
                    <div class="secondimgculture">
                        <img src={require('./culturephoto2.png')}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Culture;
