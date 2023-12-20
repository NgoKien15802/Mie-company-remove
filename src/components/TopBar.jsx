import calendar from '~/assets/img/calendar.png';
import telephone from '~/assets/img/telephone.png';
import message from '~/assets/img/message.png';
import { useTranslation } from 'react-i18next';

const TopBar = () => {
    const {t} = useTranslation();
    return (
        <div className="top-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="logo">
                            <a href="index.html">
                                <h1>{t('Nav.CompanyName')}</h1>
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
                                        <h3>{t('Nav.OpeningHour')}</h3>
                                        <p>{t('Nav.Day')}, 8:00 - 17:00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="top-bar-item">
                                    <div className="top-bar-icon">
                                        <img src={telephone} className=" flaticon flaticon-worker" />
                                    </div>
                                    <div className="top-bar-text">
                                        <h3>{t('Nav.CallUs')}</h3>
                                        <p>{import.meta.env.VITE_MOBILE_PHONE}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="top-bar-item">
                                    <div className="top-bar-icon">
                                        <img src={message} className=" flaticon flaticon-worker" />
                                    </div>
                                    <div className="top-bar-text">
                                        <h3>{t('Nav.EmailUs')}</h3>
                                        <p>{import.meta.env.VITE_EMAIL}</p>
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
