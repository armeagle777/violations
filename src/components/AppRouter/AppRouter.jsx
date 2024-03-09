import { lazy, Suspense } from 'react';
import { RequireAuth } from 'react-auth-kit';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';

import { messages } from '@/utils/constants';
import { useTheme } from '@/store/ThemeContext';
import { AdminLayout, Loader } from '@/components';
import { Home, Login, NotFound } from '@/pages';

const Profile = lazy(() => import('@/pages/Profile'));
const JkkViolationsLazy = lazy(() => import('@/pages/jkkViolations/JkkViolations'));
const EatmViolationsLazy = lazy(() => import('@/pages/eatmViolations/EatmViolations'));

const AppRouter = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { notFound } = messages;

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
            <Route
              index
              path="jkk"
              element={
                <Suspense fallback={<Loader />}>
                  <JkkViolationsLazy />
                </Suspense>
              }
            />
            <Route
              path="eatm"
              element={
                <Suspense fallback={<Loader />}>
                  <EatmViolationsLazy />
                </Suspense>
              }
            />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound message={notFound.pageNotFound} />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
