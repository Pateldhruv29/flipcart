import './products.css';
function Products() {
    return(
        <div>
            <div class="itemmain">
                <div class="grocery">
                    <div class="photo1">
                        <img src={require('./grocery.webp')}></img>
                    </div>
                    <div class="item1"><b>Grocery</b></div>
                </div>
                <div class="mobiles">
                    <div class="photo1">
                        <img src={require('./phones.webp')}></img>
                    </div>
                    <div class="item1"><b>Mobiles</b></div>
                </div>
                <div class="fashion">
                    <div class="photo1">
                        <img src={require('./fashion.webp')}></img>
                    </div>
                    <div class="item1"><b>Fashion</b></div>
                </div>
                <div class="electrnics">
                    <div class="photo1">
                        <img src={require('./electronics.webp')}></img>
                    </div>
                    <div class="item1"><b>Electronics</b></div>
                </div>
                <div class="homeandfurnicher">
                    <div class="photohome">
                        <img src={require('./homeandfurnicher.webp')}></img>
                    </div>
                    <div class="itemhome"><b>Home And Furnicher</b></div>
                </div>
                <div class="appliances">
                    <div class="photo1">
                        <img src={require('./appliance.webp')}></img>
                    </div>
                    <div class="item1"><b>Appliance</b></div>
                </div>
                <div class="travel">
                    <div class="photo1">
                        <img src={require('./trAVEL.webp')}></img>
                    </div>
                    <div class="item1"><b>Travel</b></div>
                </div>
                <div class="beauty">
                    <div class="photobeauty">
                        <img src={require('./TOYSANDMORE.webp')}></img>
                    </div>
                    <div class="itembeauty"><b>Beauty, Toys and More</b></div>
                </div>
                <div class="twowheelers">
                    <div class="photo1">
                        <img src={require('./twowheelars.webp')}></img>
                    </div>
                    <div class="item1"><b>Two Wheelers</b></div>
                </div>
            </div>
        </div>
    );
}    
export default Products;