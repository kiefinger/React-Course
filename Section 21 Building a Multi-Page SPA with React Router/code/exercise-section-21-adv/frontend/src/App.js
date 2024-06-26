import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import HomePage from './pages/home';
import EventsPage, {loadEvents} from './pages/events';
import EventsDetailPage, {loader as loadEvent} from './pages/eventsdetail';
import NewEventPage, {saveEvent} from './pages/newevent';
import EditEventPage  from './pages/editevent';
import Layout from './pages/layout';


// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsPage />, loader: loadEvents  },
      { path: 'events/:eventId' ,  loader: loadEvent, id: 'event',
      children: [
          { index: true, element: <EventsDetailPage /> ,},
          { path: 'edit', element: <EditEventPage /> },
      ]},
      { path: 'events/new', element: <NewEventPage />, action: saveEvent },
    ],
  }
]);
function App() {
   return <RouterProvider router={router} />;
}

export default App;
