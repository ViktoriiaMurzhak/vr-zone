import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('pages/HomePage/Home'));
const AboutUs = lazy(() => import('pages/AboutUsPage/AboutUs'));
const Service = lazy(() => import('pages/ServicePage/Service'));
const Contacts = lazy(() => import('pages/ContactsPage/Contacts'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NotFoundPage />} />
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="service" element={<Service />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
