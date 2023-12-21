import carousel1 from '~/assets/img/carousel-1.jpg';
import carousel2 from '~/assets/img/carousel-2.jpg';
import carousel3 from '~/assets/img/carousel-3.jpg';
const Carousel = () => {
    const carousels = [
        {
            img: {
                src: carousel1,
                alt: 'Carousel Image',
            },
            p: 'Chúng tôi chuyên nghiệp',
            h1: 'Cho dự án mơ ước của bạn',
            isActive: true,
        },

        {
            img: {
                src: carousel2,
                alt: 'Carousel Image',
            },
            p: 'Chúng tôi chuyên nghiệp',
            h1: 'Cho dự án mơ ước của bạn',
            isActive: false,
        },
        {
            img: {
                src: carousel3,
                alt: 'Carousel Image',
            },
            p: 'Chúng tôi chuyên nghiệp',
            h1: 'Cho dự án mơ ước của bạn',
            isActive: false,
        },
    ];
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                {carousels.map((el) => (
                    <div className={`carousel-item ${el.isActive ? 'active' : ''} `} key={el.img.src}>
                        <img src={el.img.src} alt={el.img.alt} />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">{el.p}</p>
                            <h1 className="animated fadeInLeft">{el.h1}</h1>
                        </div>
                    </div>
                ))}
            </div>

            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;
