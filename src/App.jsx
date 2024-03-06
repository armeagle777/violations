import { ConfigProvider, theme } from 'antd';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useTheme } from './store/ThemeContext';

import { AuthProvider, RequireAuth } from 'react-auth-kit';
import AdminLayout from './components/adminLayout/AdminLayout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';
import Profile from './pages/profile/Profile';
import JkkViolations from './pages/violations/JkkViolations';
import EatmViolations from './pages/violations/EatmViolations';

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;

  const { isDarkMode, toggleDarkMode } = useTheme();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <RequireAuth loginPath="/login">
              <AdminLayout isDarkMode={isDarkMode} handleThemeChange={toggleDarkMode} />
            </RequireAuth>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/violations">
            <Route index path="jkk" element={<JkkViolations />} />
            <Route path="eatm" element={<EatmViolations />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound message="Կներեք, նման էջ գոյություն չունի" />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </>,
    ),
  );

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <AuthProvider authType={'localstorage'} authName={'_auth'}>
        <RouterProvider router={router} />
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
