import {useState, useEffect} from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import AuthenticationPage , { action as authAction } from './pages/Authentication';
import {action as logoutAction} from './pages/Logout';
import {getAuthToken} from './util/auth';
import {AuthContext} from './store/auth-context';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'auth',
        element: <AuthenticationPage/>,
        action: authAction,
      },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: '/logout',
        action: logoutAction
      }
    ],
  },
]);

function App() {

    useEffect( () => {
        setToken ( (old) => {
            getAuthToken()} );
        setAuthToken ( (old) => (  {
            token: getAuthToken
            }));
    }, [])

  const [token, setToken] = useState(null);
  const [authToken, setAuthToken] =  useState(null);


  return   <AuthContext.Provider provider="{authContext}"><RouterProvider router={router} /></AuthContext.Provider>;
}

export default App;
