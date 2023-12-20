const Footer = () => {
    return (
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="footer-contact">
                        <h2>Office Contact</h2>
                        <p><i className="fa fa-map-marker-alt"></i>{import.meta.env.VITE_LOCATION}</p>
                        <p><i className="fa fa-phone-alt"></i>{import.meta.env.VITE_MOBILE_PHONE}</p>
                        <p><i className="fa fa-envelope"></i>{import.meta.env.VITE_EMAIL}</p>
                        <div className="footer-social">
                            <a href="https://freewebsitecode.com/"><img src="Icon_of_Zalo.svg" alt="" /></a>
                            <a href="https://facebook.com/freewebsitecode"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://freewebsitecode.com/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://freewebsitecode.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UC9HlQRmKgG3jeVD_fBxj1Pw/videos"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="footer-link">
                        <h2>Services Areas</h2>
                        <a href="">Building Construction</a>
                        <a href="">House Renovation</a>
                        <a href="">Architecture Design</a>
                        <a href="">Interior Design</a>
                        <a href="">Painting</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="footer-link">
                        <h2>Useful Pages</h2>
                        <a href="">About Us</a>
                        <a href="">Contact Us</a>
                        <a href="">Our Team</a>
                        <a href="">Projects</a>
                        <a href="">Testimonial</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="newsletter">
                        <h2>Newsletter</h2>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu
                        </p>
                        <div className="form">
                            <input className="form-control" placeholder="Email here" />
                            <button className="btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container copyright">
            <div className="row">
                <div className="col-md-12">
                    <p>&copy; <a href="https://freewebsitecode.com">Your Site Name</a>, All Right Reserved.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;
