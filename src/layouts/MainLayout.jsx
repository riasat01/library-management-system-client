import { Outlet } from 'react-router-dom';
import Navabar from '../shares-components/Navabar';

const MainLayout = () => {
    return (
        <div>
            <Navabar></Navabar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;