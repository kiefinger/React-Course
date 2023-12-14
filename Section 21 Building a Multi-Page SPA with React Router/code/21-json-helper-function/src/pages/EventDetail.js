import { useParams } from 'react-router-dom';

function EventDetailPage() {
  const params = useParams();

  return (
     <EventItem event={data.event} />
  );
}

export default EventDetailPage;
