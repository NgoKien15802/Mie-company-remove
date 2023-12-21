import Testimonial from "~/components/Testimonial";
import TopHeader from "~/components/TopHeader";
import Service from "~/components/Service";
import { useTranslation } from "react-i18next";

const ServicePage = () => {
    const {t} = useTranslation();

    return (
        <>
           <TopHeader page={t("Nav.Servive")} currentPage={t("Nav.Home")}/>
            <Service />
            <Testimonial />
        </>

    );
};

export default ServicePage;