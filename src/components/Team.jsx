import { useTranslation } from 'react-i18next';
import team1 from '~/assets/img/avt.png';
import team2 from '~/assets/img/avt.png';
import team3 from '~/assets/img/avt.png';
import team4 from '~/assets/img/avt.png';
const Team = () => {
    const {t} = useTranslation();

    const teams = [
        {
            avt: team1,
            name: 'Turg Arcvietnam',
            jobPosition: 'CEO & Founder',
            social: {
                twitter: '',
                facebook: '',
                linkedin: '',
                instagram: '',
            },
        },
        {
            avt: team2,
            name: 'Turg Arcvietnam',
            jobPosition: 'CEO & Founder',
            social: {
                twitter: '',
                facebook: '',
                linkedin: '',
                instagram: '',
            },
        },
        {
            avt: team3,
            name: 'Turg Arcvietnam',
            jobPosition: 'CEO & Founder',
            social: {
                twitter: '',
                facebook: '',
                linkedin: '',
                instagram: '',
            },
        },
        {
            avt: team4,
            name: 'Turg Arcvietnam',
            jobPosition: 'CEO & Founder',
            social: {
                twitter: '',
                facebook: '',
                linkedin: '',
                instagram: '',
            },
        },
    ];
    return (
        <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>{t("Team.OurTeam")}</p>
                    <h2>{t("Team.OurEngineer")}</h2>
                </div>
                <div className="row">
                    {teams.map((el, index) => (
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`0.${index}s`} key={index}>
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={el.avt} alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>{el.name}</h2>
                                    <p>{el.jobPosition}</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href={el.social.twitter}>
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="social-fb" href={el.social.facebook}>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="social-li" href={el.social.linkedin}>
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="social-in" href={el.social.instagram}>
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
