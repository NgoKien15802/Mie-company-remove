import { NavLink } from 'react-router-dom';

const Nav = () => {
    const navList = [
        {
            to: '/',
            text: 'Home',
            isActive: true,
        },
        {
            to: '/about',
            text: 'About',
            isActive: false,
        },
        {
            to: '/service',
            text: 'Service',
            isActive: false,
        },
        {
            to: '/team',
            text: 'Team',
            isActive: false,
        },
        {
            to: '/project',
            text: 'Project',
            isActive: false,
        },
        {
            to: '/contact',
            text: 'Contact',
            isActive: false,
        },
        {
            to: '/blog',
            text: 'Blog',
            isActive: false,
        },
    ];

    const handleClickNav = (index)=>{
        navList.map((el)=>{
            if(el.isActive){
                return el.isActive = false
            }
        })
        navList[index].isActive = true;
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
                                <NavLink to={el.to} className={`nav-item nav-link ${el.isActive ? 'active' : ''}`} key={index} onClick={()=> handleClickNav(index)}>
                                    {el.text}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
