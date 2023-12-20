import { useTranslation } from 'react-i18next';
import serviceImage from '~/assets/img/service-1.jpg';
const Service = () => {
    const {t} = useTranslation();

    const services = [
        {
            src: serviceImage,
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum praesentium, debitis necessitatibus doloremque obcaecati eius non nisi eveniet saepe odit cum maiores voluptates ad natus est earum voluptas magni?',
            footertext: 'Building Construction',
        },
        {
            src: serviceImage,
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum praesentium, debitis necessitatibus doloremque obcaecati eius non nisi eveniet saepe odit cum maiores voluptates ad natus est earum voluptas magni?',
            footertext: 'Building Construction',
        },
        {
            src: serviceImage,
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum praesentium, debitis necessitatibus doloremque obcaecati eius non nisi eveniet saepe odit cum maiores voluptates ad natus est earum voluptas magni?',
            footertext: 'Building Construction',
        },
    ];
    return (
        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <p>{t("Service.OurServices")}</p>
                    <h2>{t("Service.ProvideServices")}</h2>
                </div>
                <div className="row">
                    {services.map((el,index) => (
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${index}s`} key={index}>
                            <div className="service-item">
                                <div className="service-img">
                                    <img src={el.src} alt="Image" />
                                    <div className="service-overlay">
                                        <p>
                                            {el.text}
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>{el.footertext}</h3>
                                    <a className="btn" href={el.src} data-lightbox="service">
                                        +
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
