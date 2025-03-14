import './trending.css';
function Trending() {
    return (
        <div>
            <div class="trendingheading">Trending Gadgets & Appliances</div>
            <div class="trendingandad">
                <div class="trendingfour">
                    <div class="firsttwo">
                        <div class="mainn">
                            <div class="itemmphoto">
                                <img src={require('./trendinghead.webp')}></img>
                                <div class="itemname">Headset</div>
                                <div class="itemprice">Min. 50% Off</div>
                            </div>
                        </div>
                        <div class="mainn">
                            <div class="itemmphoto">
                                <img src={require('./trendingwatch.webp')}></img>
                                <div class="itemname">Smart Watch Straps</div>
                                <div class="itemprice">Min. 40% Off</div>
                            </div>
                        </div>
                    </div>
                    <div class="secondtwo">
                        <div class="mainn">
                            <div class="itemmphoto">
                                <img src={require('./trendingsmartband.webp')}></img>
                                <div class="itemname">Smart Bands</div>
                                <div class="itemprice">Min. 40% Off</div>
                            </div>
                        </div>
                        <div class="mainn">
                            <div class="trimerphoto">
                                <img src={require('./trendingtrimer.webp')}></img>
                                <div class="itemname">Trimmers</div>
                                <div class="itemprice">Min. 50% Off</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bigad">
                <img src={require('./bigad.png')}></img>
                </div>
            </div>
        </div>
    );
}
export default Trending;