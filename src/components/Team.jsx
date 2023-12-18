import team1 from '~/assets/img/team-1.jpg';
import team2 from '~/assets/img/team-2.jpg';
import team3 from '~/assets/img/team-3.jpg';
import team4 from '~/assets/img/team-4.jpg';
const Team = () => {
    const teams = [
        {
            avt: team1,
            name: 'Adam Phillips',
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
            name: 'Adam Phillips',
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
            name: 'Adam Phillips',
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
            name: 'Adam Phillips',
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
                    <p>Our Team</p>
                    <h2>Meet Our Engineer</h2>
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
