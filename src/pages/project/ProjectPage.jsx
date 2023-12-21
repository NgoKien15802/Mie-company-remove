import TopHeader from '~/components/TopHeader';
import portfolio1 from '~/assets/img/portfolio-1.jpg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectPage = () => {
    const {t} = useTranslation();

    let projects = [
        {
            src: portfolio1,
            name: 'complete',
            filter: 'complete',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos eos aliquam quos tempora aut ratione consectetur recusandae esse autem quo maxime tempore, quia illo laborum, excepturi fuga error cupiditate.',
        },
        {
            src: portfolio1,
            name: 'running',
            filter: 'running',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos eos aliquam quos tempora aut ratione consectetur recusandae esse autem quo maxime tempore, quia illo laborum, excepturi fuga error cupiditate.',
        },
        {
            src: portfolio1,
            name: 'running',
            filter: 'running',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos eos aliquam quos tempora aut ratione consectetur recusandae esse autem quo maxime tempore, quia illo laborum, excepturi fuga error cupiditate.',
        },
        {
            src: portfolio1,
            name: 'upcoming',
            filter: 'upcoming',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos eos aliquam quos tempora aut ratione consectetur recusandae esse autem quo maxime tempore, quia illo laborum, excepturi fuga error cupiditate.',
        },
    ];

    let filters = [
        {
            isActive: true,
            name: 'All',
        },
        {
            isActive: false,
            name: 'Complete',
        },
        {
            isActive: false,
            name: 'Running',
        },
        {
            isActive: false,
            name: 'Upcoming',
        },
    ];

    const [projectList,setProjectList] = useState(projects)

    const handleFilterProject = (index, name) => {
        if (name.toUpperCase() !== 'All'.toUpperCase()) {
            const project = projects.filter((el) => {
                return el.filter.toUpperCase() === name.toUpperCase();
            });
            setProjectList(project);
        }else[
            setProjectList(projects)
        ]
        console.log(projectList);
        filters = filters.map((el) => {
            return {
                ...el,
                isActive: false,
            };
        });

        filters[index].isActive = true;
    };
    return (
        <>
            <TopHeader page={t("Nav.Our Projects")} currentPage={t("Nav.Home")} />
            <div className="portfolio">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Our Projects</p>
                        <h2>Visit Our Projects</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul id="portfolio-flters">
                                {filters.map((el, index) => (
                                    <li
                                        key={index}
                                        className={`filter-${el.isActive ? 'active' : ''}`}
                                        onClick={() => handleFilterProject(index, el.name)}
                                    >
                                        {el.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container">
                        {projectList.map((el, index) => (
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp"
                                data-wow-delay={`0.${index + 1}s`}
                                key={index}
                            >
                                <div className="portfolio-warp">
                                    <div className="portfolio-img">
                                        <img src={el.src} alt="Image" />
                                        <div className="portfolio-overlay">
                                            <p>{el.desc}</p>
                                        </div>
                                    </div>
                                    <div className="portfolio-text">
                                        <h3>{el.name}</h3>
                                        <a className="btn" href={el.src} data-lightbox="portfolio">
                                            +
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
