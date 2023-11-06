import { Outlet } from 'react-router-dom';
import Navabar from '../shares-components/Navabar';
import Footer from '../shares-components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navabar></Navabar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;