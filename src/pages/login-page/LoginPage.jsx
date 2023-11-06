import { Outlet } from 'react-router-dom';
import login_img from '../../assets/login/login-bg.jpg'

const LoginPage = () => {
    return (
        <div style={
            {
                backgroundImage: `url(${login_img}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
                backgroundBlendMode: 'overlay',
                backgroundSize: 'cover'
            }
        } className="h-screen w-screen">
            <Outlet></Outlet>
        </div>
    );
};

export default LoginPage;