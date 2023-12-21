import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Icon_of_Zalo from '~/assets/img/Icon_of_Zalo.png';
const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="footer-contact">
                            <h2>{t('Footer.Office Contact')}</h2>
                            <p>
                                <i className="fa fa-map-marker-alt"></i>
                                {import.meta.env.VITE_LOCATION}
                            </p>
                            <p>
                                <i className="fa fa-phone-alt"></i>
                                {import.meta.env.VITE_MOBILE_PHONE}
                            </p>
                            <p>
                                <i className="fa fa-envelope"></i>
                                {import.meta.env.VITE_EMAIL}
                            </p>
                            <div className="footer-social">
                                <a className='footer-social-zalo' href={import.meta.env.VITE_LINK_ZALO}>
                                    <img className='footer-social-zalo-img' src={Icon_of_Zalo} alt="" />
                                </a>
                                <a href={import.meta.env.VITE_LINK_FB}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                {/* <a href="https://freewebsitecode.com/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a> */}
                                <a href={import.meta.env.VITE_LINK_INSTAGRAM}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href={import.meta.env.VITE_LINK_YOUTOBE}>
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="footer-link">
                            <h2>{t("Footer.Useful Pages")}</h2>
                            <NavLink to="/about">{t("Nav.About Us")}</NavLink>
                            <NavLink to="/contact">{t("Nav.Contact Us")}</NavLink>
                            <NavLink to="/team">{t("Nav.Our Team")}</NavLink>
                            <NavLink to="/project">{t("Nav.Projects")}</NavLink>
                            <NavLink to="/service">{t("Nav.Servive")}</NavLink>
                            <NavLink to="/blog">{t("Nav.BLog")}</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="newsletter">
                            <h2>{t("Footer.Newsletter")}</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare
                                velit non vulpu
                            </p>
                            <div className="form">
                                <input className="form-control" placeholder={t('Footer.Email here')} />
                                <button className="btn">{t("Footer.Submit")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
            </div>
        </div>
    );
};

export default Footer;
