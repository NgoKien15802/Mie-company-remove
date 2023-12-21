import { useTranslation } from 'react-i18next';
import blog1 from '~/assets/img/blog-1.jpg';
const Blog = () => {
    const {t} = useTranslation();

    const blogs = [
        {
            src: blog1,
            created: 'Turg Arcvietnam',
            location: 'Ha Noi',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, alias excepturi cupiditate quia omnis odit consequuntur nulla voluptates! Excepturi enim nisi cumque distinctio consectetur est eligendi rerum eaque blanditiis maiores!',
        },
        {
            src: blog1,
            created: 'Turg Arcvietnam',
            location: 'Ha Noi',

            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, alias excepturi cupiditate quia omnis odit consequuntur nulla voluptates! Excepturi enim nisi cumque distinctio consectetur est eligendi rerum eaque blanditiis maiores!',
        },
        {
            src: blog1,
            created: 'Turg Arcvietnam',
            location: 'Ha Noi',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, alias excepturi cupiditate quia omnis odit consequuntur nulla voluptates! Excepturi enim nisi cumque distinctio consectetur est eligendi rerum eaque blanditiis maiores!',
        },
    ];
    return (
        <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>{t("Blog.Latest Blog")}</p>
                    <h2>{t("Blog.Latest From Our Blog")}</h2>
                </div>
                <div className="row">
                    {blogs.map((el, index) => (
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${index + 1}s`} key={index}>
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={el.src} alt="Image" />
                                </div>
                                <div className="blog-title">
                                    <h3>{el.location}</h3>
                                    <a className="btn" href={el.src} data-lightbox="service">+</a>

                                </div>
                                <div className="blog-meta">
                                    <p>
                                        {t('Blog.By')}<a href="">{el.created}</a>
                                    </p>
                                </div>
                                <div className="blog-text">
                                    <p>{el.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
