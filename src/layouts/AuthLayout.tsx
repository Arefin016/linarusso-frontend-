import { Outlet, ScrollRestoration } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <ScrollRestoration />
            <Outlet />
        </div>
    );
};

export default AuthLayout;