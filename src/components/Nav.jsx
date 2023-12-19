const Nav = () => {
    return (
        <div className="nav-bar">
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
                            <a href="index.html" className="nav-item nav-link active">
                                Home
                            </a>
                            <a href="about.html" className="nav-item nav-link">
                                About
                            </a>
                            <a href="service.html" className="nav-item nav-link">
                                Service
                            </a>
                            <a href="team.html" className="nav-item nav-link">
                                Team
                            </a>
                            <a href="portfolio.html" className="nav-item nav-link">
                                Project
                            </a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                    Pages
                                </a>
                                <div className="dropdown-menu">
                                    <a href="blog.html" className="dropdown-item">
                                        Blog Page
                                    </a>
                                    <a href="single.html" className="dropdown-item">
                                        Single Page
                                    </a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">
                                Contact
                            </a>
                        </div>
                        <div className="ml-auto">
                            <a className="btn" href="https://freewebsitecode.com">
                                Download All Template
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
