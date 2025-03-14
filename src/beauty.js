import './beauty.css';
function Beauty(){
    return(
        <div>
            <div class="itemheading">food,beauty,toys & more</div>
            <div class="flex">
                <div class="main">
                    <div class="itemphoto">
                        <img src={require('./stationary.jpg')}></img>
                        <div class="itemname">Top Selling Stationary</div>
                        <div class="itemprice">From ₹49</div>
                    </div>
                </div>
                <div class="main">
                    <div class="itemphoto">
                        <img src={require('./teddy.jpg')}></img>
                        <div class="itemname">Soft toys</div>
                        <div class="itemprice">Up to 70% off</div>
                    </div>
                </div>
                <div class="main">
                    <div class="itemphoto">
                        <img src={require('./electriccycle.jpg')}></img>
                        <div class="itemname">Electric Cycle</div>
                        <div class="itemprice">up to 40% off</div>
                    </div>
                </div>
                <div class="main">
                    <div class="itemphoto">
                        <img src={require('./actiontoys.jpg')}></img>
                        <div class="itemname">Best Of Action Toys</div>
                        <div class="itemprice">Up to 70% off</div>
                    </div>
                </div>
                <div class="main">
                    <div class="itemphoto">
                        <img src={require('./dryfruits.jpg')}></img>
                        <div class="itemname">Dry fruit</div>
                        <div class="itemprice">up to 75% off</div>
                    </div>
                </div>
                <div class="main">
                    <div class="itemphoto">
                        <img src={require('./gym.jpg')}></img>
                        <div class="itemname">Tredmills</div>
                        <div class="itemprice">up to 70% off</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Beauty;
