import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { toggleDarkMode } from '~/reduxToolkit/globalSlice';

const HomePage = () => {
    const { t } = useTranslation('home');
    const { darkMode } = useSelector((state) => state.global);
    const dispatch = useDispatch();
    const handleToggleDarkMode = () => {
        dispatch(toggleDarkMode(!darkMode));
    };
    return (
        <div>
            {t('nav.hello')}
            <p>{darkMode ? 'true' : 'false'}</p>
            <Button type='primary' onClick={handleToggleDarkMode} >Toggle</Button>
        </div>
    );
};

export default HomePage;