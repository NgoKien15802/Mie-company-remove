import calendar from '~/assets/img/calendar.png';
import telephone from '~/assets/img/telephone.png';
import message from '~/assets/img/message.png';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="logo">
                            <a href="index.html">
                                <h1>Builderz</h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 d-none d-lg-block">
                        <div className="row">
                            <div className="col-4">
                                <div className="top-bar-item">
                                    <div className="top-bar-icon">
                                        <img src={calendar} className=" flaticon flaticon-worker" />
                                    </div>
                                    <div className="top-bar-text">
                                        <h3>Opening Hour</h3>
                                        <p>Mon - Fri, 8:00 - 9:00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="top-bar-item">
                                    <div className="top-bar-icon">
                                        <img src={telephone} className=" flaticon flaticon-worker" />
                                    </div>
                                    <div className="top-bar-text">
                                        <h3>Call Us</h3>
                                        <p>+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="top-bar-item">
                                    <div className="top-bar-icon">
                                        <img src={message} className=" flaticon flaticon-worker" />
                                    </div>
                                    <div className="top-bar-text">
                                        <h3>Email Us</h3>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;