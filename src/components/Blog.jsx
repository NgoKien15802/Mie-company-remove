import blog1 from '~/assets/img/blog-1.jpg';
const Blog = () => {
    const blogs = [
        {
            src: blog1,
            created: 'kien',
            location: 'Ha Noi',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, alias excepturi cupiditate quia omnis odit consequuntur nulla voluptates! Excepturi enim nisi cumque distinctio consectetur est eligendi rerum eaque blanditiis maiores!',
        },
        {
            src: blog1,
            created: 'kien',
            location: 'Ha Noi',

            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, alias excepturi cupiditate quia omnis odit consequuntur nulla voluptates! Excepturi enim nisi cumque distinctio consectetur est eligendi rerum eaque blanditiis maiores!',
        },
        {
            src: blog1,
            created: 'kien',
            location: 'Ha Noi',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, alias excepturi cupiditate quia omnis odit consequuntur nulla voluptates! Excepturi enim nisi cumque distinctio consectetur est eligendi rerum eaque blanditiis maiores!',
        },
    ];
    return (
        <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>Latest Blog</p>
                    <h2>Latest From Our Blog</h2>
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
                                </div>
                                <div className="blog-meta">
                                    <p>
                                        By<a href="">{el.created}</a>
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
