import workers from '~/assets/img/workers.png';
import apartments from '~/assets/img/apartments.png';
import location from '~/assets/img/location-pin.png';
import shipping from '~/assets/img/shipping.png';
const Fact = () => {
    return (
        <div className="fact">
            <div className="container-fluid">
                <div className="row counters">
                    <div className="col-md-6 fact-left wow slideInLeft">
                        <div className="row">
                            <div className="col-6">
                                <div className="fact-icon">
                                    <img src={workers} className=" flaticon flaticon-worker" />
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">109</h2>
                                    <p>Expert Workers</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fact-icon">
                                    <img src={apartments} className=" flaticon flaticon-worker" />
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">485</h2>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 fact-right wow slideInRight">
                        <div className="row">
                            <div className="col-6">
                                <div className="fact-icon">
                                    <img src={location} className=" flaticon flaticon-worker" />
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">789</h2>
                                    <p>Completed Projects</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fact-icon">
                                    <img src={shipping} className=" flaticon flaticon-worker" />
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">890</h2>
                                    <p>Running Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fact;
