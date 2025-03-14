import './ethics.css';

function Ethics() {
    return (
        <div>
            <div class="ethicsmainname">
                <b>Ethics & Compliance</b>
            </div>
            <div class="ethicsthreediv">
                <div class="ethicsfirst"></div>
                <div class="ethicssecond">
                    <img src={require('./ethics.jpg')}></img>
                </div>
                <div class="ethicsthird"></div>
            </div>
            <div class="ethicssentance">
                Building trust with Integrity. At Flipkart, every decision made is based on ethical and moral principles - no success is meaningful if it’s not achieved the right way.
            </div>
            <div class="ethicsbutton">
                KNOW MORE
            </div>
        </div>
    );
}

export default Ethics;
