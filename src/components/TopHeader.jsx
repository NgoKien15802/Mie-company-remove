import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TopHeader = ({ page, currentPage}) => {
    return (
        <div className="page-header" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>{page}</h2>
                </div>
                <div className="col-12">
                    <NavLink to="/">{currentPage}</NavLink>
                    <NavLink to="/about">{page}</NavLink>
                </div>
            </div>
        </div>
    </div>
    );
};

export default TopHeader;