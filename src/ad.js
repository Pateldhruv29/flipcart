import './ad.css';
function Ad() {
    return (
        <div>
            <div class="threeads">
                <div class="firstad">
                    <img src={require('./ad1.webp')}></img>
                </div>
                <div class="secondad">
                    <img src={require('./ad2.webp')}></img>
                </div>
                <div class="thirdad">
                    <img src={require('./ad3.webp')}></img>
                </div>
            </div>
        </div>
    );
}
export default Ad;