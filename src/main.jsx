import ReactDOM from 'react-dom/client';
// Todo: Bring in the appropriate imports
import {createBrowserRouter,RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const Direct_router = createBrowserRouter([
  // Todo: Define the accessible routes, and which components respond to which URL
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:
    [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/About',
        element: <AboutPage/>
      },
      {
        path: '/Portfolio',
        element: <Portfolio/>
      },
      {
        path: '/Resume',
        element: <Resume/>
      },
      {
        path: '/Contact',
        element: <Contact/>
      }
    ]
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Direct_router} />
);
