import './flipcartgroup.css';

function Flipcartgroup() {
    return (
        <div>
            <div class="maindiv">
                <div class="imgandtext">
                    <div class="grpimg">
                        <img src={require('./grpimg.jpg')}></img>
                    </div>
                    <div class="threediv">
                        <div class="titlename"><b>The Flipkart Group</b></div>
                        <div class="sentance">The Flipkart Group is one of India's leading digital commerce entities and includes group companies Flipkart, Myntra, Flipkart Wholesale, Flipkart Health+, Cleartrip and ANS Commerce.
                        </div>
                        <div class="button">ABOUT US</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Flipcartgroup;
