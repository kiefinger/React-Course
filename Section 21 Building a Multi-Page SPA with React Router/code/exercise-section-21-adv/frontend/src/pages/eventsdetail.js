import { Link, useNavigate, useParams, useRouteLoaderData, json } from 'react-router-dom';
import EventItem from '../components/EventItem'

function EventsDetailPage() {
    const params = useParams();
    const data = useRouteLoaderData('event');

  return (
    <>
      <h1>EventsDetailPage</h1>
        <EventItem event={data.event} />
    </>
  );
}

export async function loader( {request, params} ) {
   console.log("loader")
   const id = params.eventId;
   const response  = await fetch ( 'http://localhost:8080/events/' + id );
   if ( !response.ok ) {
        throw json( {message: "Could not load evnet "});
   } else {
        return response;
   }
}

export default EventsDetailPage;