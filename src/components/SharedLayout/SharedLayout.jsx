import { Outlet } from 'react-router-dom'; // component for rendering child components
import { Suspense } from 'react';
import { Header, MainMenuItem } from './SharedLayout.styled'
import  Loader from '../Loader/Loader'

const SharedLayout = () => {
  return (
    <>
      <Header>
        <MainMenuItem to="/">Home</MainMenuItem>
        <MainMenuItem to="/movies">Movies</MainMenuItem>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;