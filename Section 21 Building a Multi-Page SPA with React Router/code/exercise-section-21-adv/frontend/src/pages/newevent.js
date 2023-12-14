import { Link, useNavigate,json , redirect} from 'react-router-dom';
import EventForm from '../components/EventForm';


function NewEventPage() {

   return ( <EventForm  ></EventForm> )
}

export async function saveEvent( {request, params}) {

    const data = await request.formData();
    const event = {
        name: data.get('name'),
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')};

     const response = await fetch ( "http://localhost:8080/events" , {
      method: "POST" ,
      body: JSON.stringify( event ),
      headers: { 'Content-Type': 'application/json'   },
      });

      if ( !response.ok ) {
        throw json( {method: "Could not save evnet"},{ status: 500})
      } else {
        return redirect ( '/events')
      }



}
export default NewEventPage;