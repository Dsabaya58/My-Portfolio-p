// import React from 'react'
import { Suspense, lazy } from 'react'
import { Outlet, useRoutes } from 'react-router-dom';

export const About = lazy(() => import('/Pages/About'));
export const Projects = lazy(() => import('/Pages/Projects'));
export const Services = lazy(() => import('/Pages/Services'));

export default function Router() {
    const routes = useRoutes([
       {
        element: (
            <Suspense>
                <Outlet />
            </Suspense>
        ),
        children: [
            { path: '/about', element: <About />},
            { path: '/projects', element: <Projects />},
            { path: '/services', element: <Services />},
        ],
       },
    ])
}