import './sus.css';

function Sus() {
    return (
        <div>
            <div class="susmain">
                <div class="susmainname">
                    <b>Sustainability</b>
                </div>
                <div class="susthreediv">
                    <div class="susfirst"></div>
                    <div class="sussecond">
                        <img src={require('./susimg.jpg')}></img>
                    </div>
                    <div class="susthird"></div>
                </div>
                <div class="sussentance">
                    The future of e-commerce is sustainable, equitable and inclusive. As we continue to drive changes across key areas of our operations, our commitment is embedded in our vision to create a positive impact, for the planet and communities.
                </div>
                <div class="susbutton">
                    KNOW MORE
                </div>
            </div>
        </div>
    );
}

export default Sus;
