import TopHeader from '~/components/TopHeader';
import Blog from '~/components/Blog';

const BlogPage = () => {
    return (
        <>
           <TopHeader page="Our Blog" currentPage="Home"/>
            <Blog /> 
        </>
    );
};

export default BlogPage;