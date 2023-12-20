import Carousel from '~/components/Carousel';
import Feature from '~/components/Feature';
import About from '~/components/About';
import Fact from '~/components/Fact';
import Service from '~/components/Service';
import Video from '~/components/Video';
import Team from '~/components/Team';
import Testimonial from '~/components/Testimonial';
import Blog from '~/components/Blog';
import Modal from '~/components/Modal';

const HomePage = () => {
    return (
        <>
            <Carousel />
            <Feature />
            <About />
            <Fact />
            <Service />
            <Video />
            <Modal />
            <Team />
            <Testimonial />
            <Blog />
        </>
    );
};

export default HomePage;
