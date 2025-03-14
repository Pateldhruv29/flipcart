import './topdeals.css';
function Topdeals(){
    return(
        <div>
        <div class="itemheading">Top Deals</div>
        <div class="flex">
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./ipad.jpg')}></img>
                    <div class="itemname">Apple Ipads</div>
                    <div class="itemprice">Shop Now!</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./puma.jpg')}></img>
                    <div class="itemname">Puma Shoes</div>
                    <div class="itemprice">Min 40% Off</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./kurtaset.jpg')}></img>
                    <div class="itemname">Kurta Sets</div>
                    <div class="itemprice">Min 70% Off</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./instax.jpg')}></img>
                    <div class="itemname">Instax Cameras</div>
                    <div class="itemprice">from ₹3,999</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./traditional.jpg')}></img>
                    <div class="itemname">Sabse Amazing Deals!</div>
                    <div class="itemprice">from ₹299</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./silksaree.jpg')}></img>
                    <div class="itemname">Silk Sarees</div>
                    <div class="itemprice">Under ₹599</div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Topdeals;