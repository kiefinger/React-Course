import classes from './MeetupDetails.module.css';

export default function MeetupDetails (props) {

    return (
     <section className={classes.section}>
            <img src = {props.img} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            </section>
    );
}