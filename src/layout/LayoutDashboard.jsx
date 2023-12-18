import Nav from '~/components/Nav';
import Footer from '~/components/Footer';
import TopBar from '~/components/TopBar';
import Carousel from '~/components/Carousel';
import Feature from '~/components/Feature';
import About from '~/components/About';
import Fact from '~/components/Fact';
import Service from '~/components/Service';
import Video from '~/components/Video';
import Team from '~/components/Team';
import Testimonial from '~/components/Testimonial';
import Blog from '~/components/Blog';
const LayoutDashboard = () => {
    return (
        <div className="wrapper">
            <TopBar />
            <Nav />
            <Carousel />
            <Feature />
            <About />
            <Fact />
            <Service />
            <Video />
            <Team />
            <Testimonial />
            <Blog />
            <Footer />
            <a href="#" className="back-to-top">
                <i className="fa fa-chevron-up"></i>
            </a>
        </div>
    );
};

export default LayoutDashboard;
