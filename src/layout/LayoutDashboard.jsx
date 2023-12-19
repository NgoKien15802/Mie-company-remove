import Nav from '~/components/Nav';
import Footer from '~/components/Footer';
import TopBar from '~/components/TopBar';
import {Outlet} from 'react-router-dom'

const LayoutDashboard = () => {
    return (
        <div className="wrapper">
            <Nav />
            <TopBar />
            <Outlet></Outlet>
            <Footer />
            <a href="#" className="back-to-top">
                <i className="fa fa-chevron-up"></i>
            </a>
        </div>
    );
};

export default LayoutDashboard;
