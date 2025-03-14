import './phoneads.css';
function Phoneads() {
    return (
        <div>
            <div class="threeads">
                <div class="firstad">
                    <img src={require('./discount1.webp')}></img>
                </div>
                <div class="secondad">
                    <img src={require('./discount2.webp')}></img>
                </div>
                <div class="thirdad">
                    <img src={require('./discount3.webp')}></img>
                </div>
            </div>
        </div>
    );
}
export default Phoneads;