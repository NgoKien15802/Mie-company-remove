import workers from '~/assets/img/workers.png';
import apartments from '~/assets/img/apartments.png';
import telephone from '~/assets/img/telephone.png';
import { useTranslation } from 'react-i18next';

const Feature = () => {
    const {t} = useTranslation();
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
                                <h3>{t("Feature.ExpertWorker")}</h3>
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
                                <h3>{t('Feature.QualityWork')}</h3>
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
                                <h3>24/7 {t("Feature.Support")}</h3>
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
