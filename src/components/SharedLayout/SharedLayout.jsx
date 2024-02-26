import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, MainMenuItem } from './SharedLayout.styled'

const SharedLayout = () => {
  return (
    <>
      <Header>
        <MainMenuItem to="/">Home</MainMenuItem>
        <MainMenuItem to="/movies">Movies</MainMenuItem>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;