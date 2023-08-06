import React from 'react';
import { Layout, Title } from './styles/Styles';
import Navbar from './components/Navbar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

function RouterLayout() {
  return (
    <Layout>
      <Navbar />
      <Outlet />
    </Layout>
  )
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
