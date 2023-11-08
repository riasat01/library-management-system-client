import { Outlet } from 'react-router-dom';
import Navbar from '../shares-components/Navbar';
import Footer from '../shares-components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;