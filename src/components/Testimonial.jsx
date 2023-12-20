import { useTranslation } from 'react-i18next';
import testimonial1 from '~/assets/img/testimonial-1.jpg';

const Carousel = () => {
    const {t} = useTranslation();

    const carousels = [
        {
            img: {
                src: testimonial1,
                alt: 'Carousel Image',
            },
            name: 'Kien',
            comment:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nostrum, placeat ea illo cum dolor autem quis. Expedita, impedit neque, temporibus aut praesentium deserunt non nemo id ipsa assumenda aliquam.',
            isActive: true,
        },

        {
            img: {
                src: testimonial1,
                alt: 'Carousel Image',
            },
            name: 'Kien',
            comment:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nostrum, placeat ea illo cum dolor autem quis. Expedita, impedit neque, temporibus aut praesentium deserunt non nemo id ipsa assumenda aliquam.',
            isActive: false,
        },
        {
            img: {
                src: testimonial1,
                alt: 'Carousel Image',
            },
            name: 'Kien',
            comment:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nostrum, placeat ea illo cum dolor autem quis. Expedita, impedit neque, temporibus aut praesentium deserunt non nemo id ipsa assumenda aliquam.',
            isActive: false,
        },
    ];
    return (
        <>
            <div className="section-header text-center">
                    <p>{t("Customer.OurCustomer")}</p>
                    <h2>{t("Customer.Comment about our company")}</h2>
                </div>
            <div className="testimonial wow fadeIn">
                
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {carousels.map((el, index) => (
                            <div className={`carousel-item ${el.isActive ? 'active' : ''}`} key={index}>
                                <div className="cards-wrapper">
                                    <div className="card">
                                        <img src={el.img.src} className="card-img-top" alt={el.img.alt} />
                                        <div className="card-body">
                                            <h5 className="card-title">{el.name}</h5>
                                            <p className="card-text">{el.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Carousel;
