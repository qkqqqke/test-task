import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Feedback from './components/Feedback';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
   {
    path: '/',
    element: <App />,
   },
   {
    path: '/feedback',
    element: <Feedback/>
   }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

