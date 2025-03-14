import './featurebrands.css';
function Featurebrands() {
    return (
        <div>
              <div class="threeads">
                <div class="firstad">
                    <img src={require('./fbrands1.webp')}></img>
                </div>
                <div class="secondad">
                    <img src={require('./fbrands2.webp')}></img>
                </div>
                <div class="thirdad">
                    <img src={require('./fbrands3.webp')}></img>
                </div>
            </div>
        </div>
    );
}
export default Featurebrands;