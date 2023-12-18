import workers from '~/assets/img/workers.png';
import apartments from '~/assets/img/apartments.png';
import telephone from '~/assets/img/telephone.png';

const Feature = () => {
    return (
        <div className="feature wow fadeInUp" data-wow-delay="0.1s">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img src={workers} className=" flaticon flaticon-worker" />
                            </div>
                            <div className="feature-text">
                                <h3>Expert Worker</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img src={apartments} className=" flaticon flaticon-worker" />
                            </div>
                            <div className="feature-text">
                                <h3>Quality Work</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img src={telephone} className=" flaticon flaticon-worker" />
                            </div>
                            <div className="feature-text">
                                <h3>24/7 Support</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
