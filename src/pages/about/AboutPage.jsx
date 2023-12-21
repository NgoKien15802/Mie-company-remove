import { useTranslation } from "react-i18next";
import About from "../../components/About";
import Fact from "../../components/Fact";
import Testimonial from "../../components/Testimonial";
import TopHeader from "../../components/TopHeader";

const AboutPage = () => {
    const {t} = useTranslation();

    return (
        <>
           <TopHeader page={t("Nav.About Us")} currentPage={t("Nav.Home")}/>
            <About />
            <Fact />
            <Testimonial />
        </>



    );
};

export default AboutPage;
