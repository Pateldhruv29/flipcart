import './slider.css';
function Slider() {
    return (
        <div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                < div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require('./sliderimg1.webp')}></img>
                    </div>
                    <div class="carousel-item">
                        <img src={require('./sliderimg2.webp')}></img>
                    </div>
                    <div class="carousel-item">
                        <img src={require('./sliderimg3.webp')}></img>
                    </div>
                    <div class="carousel-item">
                        <img src={require('./sliderimg4.webp')}></img>
                    </div>
                    <div class="carousel-item">
                        <img src={require('./sliderimg5.webp')}></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
export default Slider;