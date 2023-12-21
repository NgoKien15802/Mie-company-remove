import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const { t } = useTranslation();
    const{i18n} = useTranslation();

    const navList = [
        {
            to: '/',
            text: t('Nav.Home'),
            isActive: true,
        },
        {
            to: '/about',
            text: t('Nav.About'),
            isActive: false,
        },
        {
            to: '/service',
            text: t('Nav.Service'),
            isActive: false,
        },
        {
            to: '/team',
            text: t('Nav.Team'),
            isActive: false,
        },
        {
            to: '/project',
            text: t('Nav.Projects'),
            isActive: false,
        },
        {
            to: '/contact',
            text: t('Nav.Contact'),
            isActive: false,
        },
        {
            to: '/blog',
            text: t('Nav.BLogNav'),
            isActive: false,
        },
    ];

    const handleClickNav = (index) => {
        navList.map((el) => {
            if (el.isActive) {
                return (el.isActive = false);
            }
        });
        navList[index].isActive = true;
    };



    const handleClickLanguage = (value) => {
        i18n.changeLanguage(value)
    }
    return (
        <div className="nav-bar nav-sticky">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
                    <a href="#" className="navbar-brand">
                        MENU
                    </a>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            {navList.map((el, index) => (
                                <NavLink
                                    to={el.to}
                                    className={`nav-item nav-link ${el.isActive ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => handleClickNav(index)}
                                >
                                    {el.text}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => handleClickLanguage(e.target.value)}
                    >
                        <option value="vi" selected>
                            Vietnamese
                        </option>
                        <option value="en">English</option>
                    </select>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
