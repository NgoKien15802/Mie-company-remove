import { Route, Routes } from 'react-router-dom';
import LayoutDashboard from '~/layout/LayoutDashboard';
import NotFoundPage from '~/pages/not-found/NotFoundPage';
import HomePage from '~/pages/home/HomePage';
import AboutPage from '~/pages/about/AboutPage';
import ServicePage from '~/pages/service/ServicePage';
import TeamPage from '~/pages/team/TeamPage';

const index = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route element={<LayoutDashboard />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/team" element={<TeamPage />} />
                
            </Route>
        </Routes>
    );
};

export default index;
