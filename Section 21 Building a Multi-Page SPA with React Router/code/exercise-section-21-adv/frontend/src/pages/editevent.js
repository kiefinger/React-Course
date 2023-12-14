import { Link, useNavigate, useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

function EditEventPage() {
   const data = useRouteLoaderData('event');
   const event = data.event;

return ( <EventForm event={event}></EventForm> )

}

export default EditEventPage;