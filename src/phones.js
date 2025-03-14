import './topdeals.css';
function Topdeals(){
    return(
        <div>
        <div class="itemheading">Top Deals On Phones</div>
        <div class="flex">
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./plus14.jpg')}></img>
                    <div class="itemname">Iphone 14 Plus</div>
                    <div class="itemprice">From ₹61,999 </div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./nordce.jpg')}></img>
                    <div class="itemname">Oneplus Nord Ce</div>
                    <div class="itemprice">From ₹19,999 </div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./reno7pro.jpg')}></img>
                    <div class="itemname">Oppo Reno 7 Pro</div>
                    <div class="itemprice">From ₹29,999</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./iphone15.jpg')}></img>
                    <div class="itemname">Iphone 15 Promax</div>
                    <div class="itemprice">from ₹1,51,999</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./s23ultra.jpg')}></img>
                    <div class="itemname">Samsung S24 Ultra</div>
                    <div class="itemprice">from ₹1,15,999</div>
                </div>
            </div>
            <div class="main">
                <div class="itemphoto">
                    <img src={require('./s23fe.jpg')}></img>
                    <div class="itemname">Samsung s23 Fe</div>
                    <div class="itemprice">From ₹50,000</div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Topdeals;