import './electronics.css';
function Electronics(){
    return(
        <div>
        <div class="itemheading">Best of eletronic</div>
        <div class="flex">
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./moniter.jpg')}></img>
                    <div class="itemname">BNQU monitors</div>
                    <div class="itemprice">from ₹8,999</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./noise.jpg')}></img>
                    <div class="itemname">Smart-watch</div>
                    <div class="itemprice">from ₹2,999</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./printer.jpg')}></img>
                    <div class="itemname">printer</div>
                    <div class="itemprice">from ₹3,899</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./airbuds.jpg')}></img>
                    <div class="itemname">wireless-buds</div>
                    <div class="itemprice">from ₹2,499</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./speakers.jpg')}></img>
                    <div class="itemname">mobilespekers</div>
                    <div class="itemprice">from ₹2,499</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./shavers.jpg')}></img>
                    <div class="itemname">shavers</div>
                    <div class="itemprice">from ₹1,499</div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Electronics;