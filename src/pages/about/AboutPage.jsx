import About from "../../components/About";
import Fact from "../../components/Fact";
import Testimonial from "../../components/Testimonial";
import TopHeader from "../../components/TopHeader";

const AboutPage = () => {
    return (
        <>
           <TopHeader page="About us" currentPage="Home"/>
            <About />
            <Fact />
            <Testimonial />
        </>



    );
};

export default AboutPage;
