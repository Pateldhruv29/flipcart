import Header from './about/header';
import Video from './about/video'
import Flipcartgroup from './about/flipcartgroup';
import Ethics from './about/ethics';
import Culture from './about/culture';
import Flowtext from './about/flowtext';
import Technology from './about/technology';
import Sus from './about/sus';
import Stories from './about/stories';
import Footer from './about/footer';

function About() {
    return (
        <div>
            <Header />
            <Video />
            <Flipcartgroup />
            <Ethics />
            <Culture />
            <Flowtext />
            <Technology />
            <Sus />
            <Stories />
            <Footer />
        </div>
    );
}

export default About;