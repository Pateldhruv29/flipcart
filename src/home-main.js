import Header from './header';
import Products from './products';
import Slider from './slider';
import Electronics from './electronics';
import Ad from './ad';
import Beauty from './beauty';
import Featurebrands from './featurebrands';
import Topdeals from './topdeals';
import Trending from './trending';
import Phones from './phones';
import Phoneads from './phoneads';
import Footer from './footer';

function Home() {
    return (
        <div>
            <Header />
            <Products />
            <Slider />
            <Electronics />
            <Ad />
            <Beauty />
            <Featurebrands />
            <Topdeals />
            <Trending />
            <Phones />
            <Phoneads />
            <Footer />
        </div>
    );
}

export default Home;
