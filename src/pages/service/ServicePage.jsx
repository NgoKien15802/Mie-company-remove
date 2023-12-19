import Testimonial from "~/components/Testimonial";
import TopHeader from "~/components/TopHeader";
import Service from "~/components/Service";

const ServicePage = () => {
    return (
        <>
           <TopHeader page="Our Services" currentPage="Home"/>
            <Service />
            <Testimonial />
        </>

    );
};

export default ServicePage;