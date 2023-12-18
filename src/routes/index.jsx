import { Route, Routes } from 'react-router-dom';
import LayoutDashboard from '~/layout/LayoutDashboard';
import NotFoundPage from '~/pages/not-found/NotFoundPage';

const index = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<LayoutDashboard />} />
        </Routes>
    );
};

export default index;
