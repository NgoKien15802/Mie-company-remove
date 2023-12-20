import { useTranslation } from 'react-i18next';
import about from '~/assets/img/about.jpg'
const About = () => {
    const {t} = useTranslation();

    return (
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src={about} alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>{t("About.Welcometo") + t("Nav.CompanyName")}</p>
                                <h2>25 {t("About.YearEx")}</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default About;