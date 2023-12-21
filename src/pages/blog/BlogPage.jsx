import TopHeader from '~/components/TopHeader';
import Blog from '~/components/Blog';
import { useTranslation } from 'react-i18next';

const BlogPage = () => {
    const {t} = useTranslation();

    return (
        <>
           <TopHeader page={t("Nav.OurBLog")} currentPage={t("Nav.Home")}/>
            <Blog /> 
        </>
    );
};

export default BlogPage;