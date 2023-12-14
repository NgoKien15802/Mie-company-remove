import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <NavLink to={'/'}>
                <img srcSet="" alt="" />
            </NavLink>
            <h1>Oops! Page not found</h1>
            <NavLink to={'/'}>Back to home</NavLink>
        </div>
    );
};

export default NotFoundPage;
