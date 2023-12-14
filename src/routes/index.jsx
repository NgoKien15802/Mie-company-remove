import { Route, Routes } from 'react-router-dom';
import LayoutDashboard from '~/layout/LayoutDashboard';
import HomePage from '~/pages/home/HomePage';
import SignInPage from '~/pages/auth/SignInPage';
import NotFoundPage from '~/pages/not-found/NotFoundPage';
import SettingPage from '~/pages/setting/SettingPage';

const index = () => {
    return (
        <Routes>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route element={<LayoutDashboard></LayoutDashboard>}>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/setting" element={<SettingPage></SettingPage>}></Route>
            </Route>
        </Routes>
    );
};

export default index;
