import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return <BrowserRouter>
        <Routes>

            {/* AQUI PODEMOS PONER OTRAS RUTAS COMO /ABOUT o /HOME si no necesitan auth */}
           
            {/* <Route path="/login" element={<LoginScreen />} /> */}

            <Route 
                path="/login"
                element={
                    <PublicRoute>
                        {/* Esto es el children en el high order component
                        que viene a ser el PublicRoute que engloba al loginScreen */}
                        <LoginScreen/>
                    </PublicRoute>
                }
            />

            <Route path="/*" element={
                <PrivateRoute>
                    <DashboardRoutes/>
                </PrivateRoute>
                }
            />
            {/* <Route path="/*" element={<DashboardRoutes/>} /> */}

        </Routes>
    </BrowserRouter>
};
