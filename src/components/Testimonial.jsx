import testimonial1 from '~/assets/img/testimonial-1.jpg';

const Testimonial = () => {
    const Testimonials = [
        {
            avt: testimonial1,
            name: 'Customer Name',
            profession: 'profession',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.',
        },
        {
            avt: testimonial1,
            name: 'Customer Name',
            profession: 'profession',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.',
        },
        {
            avt: testimonial1,
            name: 'Customer Name',
            profession: 'profession',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.',
        },
    ];
    return (
        <div className="testimonial wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="testimonial-slider-nav">
                            {Testimonials.map((el, index) => (
                                <div className="slider-nav" key={index}>
                                    <img src={el.avt} alt="Testimonial" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="testimonial-slider">
                            {Testimonials.map((el, index) => (
                                <div className="slider-item" key={index}>
                                    <h3>{el.name}</h3>
                                    <h4>{el.profession}</h4>
                                    <p>{el.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
