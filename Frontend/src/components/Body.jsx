import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import Peepee from './Peepee';

const Body = () => {
  const approuter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    { path: "/Peepee", element: <Peepee /> }
  ]);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
}

export default Body;