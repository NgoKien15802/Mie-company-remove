import { Outlet } from 'react-router-dom';
const LayoutDashboard = () => {
    return (
        <div>
            dash board
            <Outlet></Outlet>
        </div>
    );
};

export default LayoutDashboard;
